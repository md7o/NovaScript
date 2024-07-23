// CustomCodeBlock.js
import Quill from "quill";
import hljs from "highlight.js";

const CodeBlock = Quill.import("formats/code");
class CodeBlockWithHighlight extends CodeBlock {
  static create(value) {
    const node = super.create(value);
    node.classList.add("ql-syntax");
    return node;
  }

  static formats(node) {
    return node.classList.contains("ql-syntax") ? "code" : null;
  }

  format(name, value) {
    if (name === "code-block") {
      if (value) {
        this.domNode.classList.add("ql-syntax");
      } else {
        this.domNode.classList.remove("ql-syntax");
      }
    } else {
      super.format(name, value);
    }
  }
}

Quill.register(CodeBlockWithHighlight, true);

export default CodeBlockWithHighlight;
