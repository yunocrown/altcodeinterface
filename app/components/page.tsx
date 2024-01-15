'use client'
import { useEffect, useRef } from "react";
import Blockly , {WorkspaceSvg} from "blockly";

export default function Blocks() {
  const blocklyDivRef = useRef<HTMLDivElement | null>(null);
  const workspaceRef = useRef<WorkspaceSvg | null>(null);

  useEffect(() => {
    if (!workspaceRef.current && blocklyDivRef.current) {
      workspaceRef.current = Blockly.inject(blocklyDivRef.current, {
        toolbox: `<xml>
          <category name="Logic" colour="#5C81A6">
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
          </category>
          <category name="Math" colour="#5C68A6">
            <block type="math_number"></block>
            <block type="math_arithmetic"></block>
            <block type="math_random_int"></block>
          </category>
        </xml>`,
      });
    }
  }, []);
  return (
    <main>
      <div ref={blocklyDivRef} style={{ width: "100%", height: "100vh" }}></div>
    </main>
  );
}
