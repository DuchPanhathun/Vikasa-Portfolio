import { supabase } from '@/lib/supabase'

export interface UploadResult {
  success: boolean
  url?: string
  error?: string
}

export async function uploadFile(file: File, folder: string = 'uploads'): Promise<UploadResult> {
  try {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`
    const filePath = `${folder}/${fileName}`

    const { error: uploadError } = await supabase.storage
      .from(process.env.SUPABASE_STORAGE_BUCKET || 'uploads')
      .upload(filePath, file)

    if (uploadError) {
      return { success: false, error: uploadError.message }
    }

    const { data } = supabase.storage
      .from(process.env.SUPABASE_STORAGE_BUCKET || 'uploads')
      .getPublicUrl(filePath)

    return { success: true, url: data.publicUrl }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    }
  }
}

export async function deleteFile(filePath: string): Promise<UploadResult> {
  try {
    const { error } = await supabase.storage
      .from(process.env.SUPABASE_STORAGE_BUCKET || 'uploads')
      .remove([filePath])

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    }
  }
}

export async function listFiles(folder: string = ''): Promise<{ success: boolean; files?: Array<{ name: string; id: string; updated_at: string; created_at: string; last_accessed_at: string; metadata: Record<string, unknown> }>; error?: string }> {
  try {
    const { data, error } = await supabase.storage
      .from(process.env.SUPABASE_STORAGE_BUCKET || 'uploads')
      .list(folder)

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, files: data }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    }
  }
}
