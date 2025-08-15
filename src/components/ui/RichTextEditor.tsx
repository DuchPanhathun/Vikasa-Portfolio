'use client'

import React, { useState, useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { TextStyle } from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import { FontSize } from '@tiptap/extension-font-size'

interface RichTextEditorProps {
  content: string
  onChange: (content: string) => void
  placeholder?: string
  className?: string
}

export default function RichTextEditor({ 
  content, 
  onChange, 
  placeholder = "Enter text...",
  className = ""
}: RichTextEditorProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      FontSize,
    ],
    content: content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[200px] p-4 font-montserrat',
      },
    },
  }, [])

  // Update editor content when prop changes
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content)
    }
  }, [editor, content])

  // Don't render until mounted on client
  if (!isMounted) {
    return (
      <div className={`border border-gray-300 rounded-lg overflow-hidden ${className}`}>
        <div className="flex items-center gap-1 p-2 border-b border-gray-200 bg-gray-50">
          <div className="flex gap-1">
            {/* Skeleton toolbar */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-8 h-8 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        </div>
        <div className="bg-white p-4 min-h-[200px] flex items-center justify-center">
          <div className="text-gray-400">Loading editor...</div>
        </div>
      </div>
    )
  }

  if (!editor) {
    return null
  }

  const ToolbarButton = ({ 
    onClick, 
    isActive = false, 
    children, 
    title 
  }: { 
    onClick: () => void
    isActive?: boolean
    children: React.ReactNode
    title: string
  }) => (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`p-1.5 rounded text-sm font-medium transition-colors min-w-[32px] h-8 flex items-center justify-center ${
        isActive 
          ? 'bg-vikasa-espresso text-white' 
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      {children}
    </button>
  )

  return (
    <div className={`border border-gray-300 rounded-lg overflow-hidden ${className}`}>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 p-2 border-b border-gray-200 bg-gray-50">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
          title="Bold"
        >
          <strong>B</strong>
        </ToolbarButton>
        
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive('italic')}
          title="Italic"
        >
          <em>I</em>
        </ToolbarButton>
        
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive('strike')}
          title="Strikethrough"
        >
          <span className="line-through">S</span>
        </ToolbarButton>

        <div className="w-px h-5 bg-gray-300 mx-0.5" />
        
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          isActive={editor.isActive('heading', { level: 1 })}
          title="Heading 1"
        >
          H1
        </ToolbarButton>
        
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          isActive={editor.isActive('heading', { level: 2 })}
          title="Heading 2"
        >
          H2
        </ToolbarButton>
        
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          isActive={editor.isActive('heading', { level: 3 })}
          title="Heading 3"
        >
          H3
        </ToolbarButton>

        <div className="w-px h-5 bg-gray-300 mx-0.5" />
        
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive('bulletList')}
          title="Bullet List"
        >
          <span>•</span>
        </ToolbarButton>
        
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive('orderedList')}
          title="Numbered List"
        >
          1.
        </ToolbarButton>

        <div className="w-px h-5 bg-gray-300 mx-0.5" />
        
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive('blockquote')}
          title="Quote"
        >
          "
        </ToolbarButton>
        
        <ToolbarButton
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          title="Horizontal Rule"
        >
          —
        </ToolbarButton>

        <div className="w-px h-5 bg-gray-300 mx-0.5" />

        {/* Text Size Controls */}
        <div className="flex items-center gap-0.5">
          <ToolbarButton
            onClick={() => editor.chain().focus().setFontSize('12px').run()}
            title="Small Text"
          >
            <span className="text-xs font-bold">A</span>
          </ToolbarButton>
          
          <ToolbarButton
            onClick={() => editor.chain().focus().setFontSize('14px').run()}
            title="Normal Text"
          >
            <span className="text-sm font-bold">A</span>
          </ToolbarButton>
          
          <ToolbarButton
            onClick={() => editor.chain().focus().setFontSize('16px').run()}
            title="Medium Text"
          >
            <span className="text-base font-bold">A</span>
          </ToolbarButton>
          
          <ToolbarButton
            onClick={() => editor.chain().focus().setFontSize('18px').run()}
            title="Large Text"
          >
            <span className="text-lg font-bold">A</span>
          </ToolbarButton>
          
          <ToolbarButton
            onClick={() => editor.chain().focus().setFontSize('24px').run()}
            title="Extra Large Text"
          >
            <span className="text-xl font-bold">A</span>
          </ToolbarButton>
          
          <ToolbarButton
            onClick={() => editor.chain().focus().unsetFontSize().run()}
            title="Reset Size"
          >
            <span className="text-sm font-bold">↻</span>
          </ToolbarButton>
        </div>

        <div className="w-px h-5 bg-gray-300 mx-0.5" />

        {/* Color Controls */}
        <div className="flex items-center gap-0.5">
          <ToolbarButton
            onClick={() => editor.chain().focus().setColor('#000000').run()}
            title="Black Text"
          >
            <span className="text-black font-bold">A</span>
          </ToolbarButton>
          
          <ToolbarButton
            onClick={() => editor.chain().focus().setColor('#895637').run()}
            title="Vikasa Latte Text"
          >
            <span className="text-vikasa-latte  font-bold">A</span>
          </ToolbarButton>
          
          <ToolbarButton
            onClick={() => editor.chain().focus().setColor('#5E3023').run()}
            title="Vikasa Espresso Text"
          >
            <span className="text-vikasa-espresso font-bold">A</span>
          </ToolbarButton>
          
          <ToolbarButton
            onClick={() => editor.chain().focus().setColor('#D5B887').run()}
            title="Vikasa Gold Text"
          >
            <span className="text-vikasa-gold font-bold">A</span>
          </ToolbarButton>
          
          <ToolbarButton
            onClick={() => editor.chain().focus().setColor('#D5B887').run()}
            title="Vikasa Gold Light Text"
          >
            <span className="text-vikasa-gold-light font-bold">A</span>
          </ToolbarButton>
          
          <ToolbarButton
            onClick={() => editor.chain().focus().unsetColor().run()}
            title="Remove Color"
          >
            <span className="text-white font-bold">A</span>
          </ToolbarButton>
        </div>

        <div className="w-px h-5 bg-gray-300 mx-0.5" />
        
        <ToolbarButton
          onClick={() => editor.chain().focus().undo().run()}
          title="Undo"
        >
          ↶
        </ToolbarButton>
        
        <ToolbarButton
          onClick={() => editor.chain().focus().redo().run()}
          title="Redo"
        >
          ↷
        </ToolbarButton>
      </div>

      {/* Editor Content */}
      <div className="bg-white min-h-[200px] relative">
        <EditorContent editor={editor} />
        {!content && (
          <div className="absolute top-4 left-4 text-gray-400 pointer-events-none">
            {placeholder}
          </div>
        )}
      </div>
    </div>
  )
}
