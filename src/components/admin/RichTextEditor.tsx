import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    onUpdate: ({ editor: ed }) => {
      onChange(ed.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          'prose prose-lg prose-blue max-w-none min-h-[280px] p-4 focus:outline-none text-slate-700',
      },
    },
  });

  React.useEffect(() => {
    if (!editor) return;
    if (editor.getHTML() !== value) {
      editor.commands.setContent(value, { emitUpdate: false });
    }
  }, [editor, value]);

  if (!editor) {
    return <div className="rounded-xl border border-slate-200 bg-white p-4 text-slate-500">Carregando editor…</div>;
  }

  const btn =
    'px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40';

  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
      <div className="flex flex-wrap gap-2 p-3 border-b border-slate-100 bg-slate-50">
        <button type="button" className={btn} onClick={() => editor.chain().focus().toggleBold().run()}>
          Negrito
        </button>
        <button type="button" className={btn} onClick={() => editor.chain().focus().toggleItalic().run()}>
          Itálico
        </button>
        <button
          type="button"
          className={btn}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          Título
        </button>
        <button type="button" className={btn} onClick={() => editor.chain().focus().toggleBulletList().run()}>
          Lista
        </button>
        <button type="button" className={btn} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          Numerada
        </button>
        <button type="button" className={btn} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          Citação
        </button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
