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
            <block type="logic_negate"></block>
            <block type="logic_boolean"></block>
            <block type="logic_null"></block>
            <block type="logic_ternary">
             <value name="IF">
               <block type="logic_compare"></block>
             </value>
              <value name="THEN">
               <block type="variables_set"></block>
              </value>
             <value name="ELSE">
                <block type="variables_set"></block>
             </value>
            </block>
          </category>
          <category name="Math" colour="#5C68A6">
  <block type="math_number"></block>
  <block type="math_arithmetic"></block>
  <block type="math_single"></block>
  <block type="math_trig"></block>
  <block type="math_constant"></block>
  <block type="math_number_property"></block>
  <block type="math_round"></block>
  <block type="math_on_list"></block>
  <block type="math_modulo"></block>
  <block type="math_constrain"></block>
  <block type="math_random_int"></block>
  <block type="math_random_float"></block>
  <block type="math_atan2"></block>
</category>

<category name="Text" colour="#5CA65C">
<block type="text"></block>
<block type="text_join"></block>
<block type="text_append"></block>
<block type="text_length"></block>
<block type="text_isEmpty"></block>
<block type="text_indexOf"></block>
<block type="text_charAt"></block>
<block type="text_getSubstring"></block>
<block type="text_changeCase"></block>
<block type="text_trim"></block>
<block type="text_print"></block>
<block type="text_replace"></block>

</category>

<category name="Loops" colour="#FFAB19">
<block type="controls_repeat"></block>
<block type="controls_repeat_ext"></block>
<block type="controls_whileUntil"></block>
<block type="controls_for"></block>
<block type="controls_forEach"></block>
<block type="controls_flow_statements"></block>
</category>

<category name="Lists" colour="#745ba5">
  <block type="lists_create_with"></block>
  <block type="lists_create_empty"></block>
  <block type="lists_repeat"></block>
  <block type="lists_length"></block>
  <block type="lists_isEmpty"></block>
  <block type="lists_indexOf"></block>
  <block type="lists_getIndex"></block>
  <block type="lists_setIndex"></block>
  <block type="lists_getSublist"></block>
  <block type="lists_split"></block>
  <block type="lists_sort"></block>
  <block type="lists_reverse"></block>
</category>
 
<category name="Procedures" colour="#800080">
  <block type="procedures_defreturn"></block>
  <block type="procedures_defnoreturn"></block>
  <block type="procedures_callreturn"></block>
  <block type="procedures_callnoreturn"></block>
  <block type="procedures_ifreturn"></block>
</category>

   <category name="Control" colour="#FFAB19">
  <block type="controls_if"></block>
  <block type="controls_ifelse"></block>
  <block type="controls_whileUntil"></block>
  <block type="controls_for"></block>
  <block type="controls_forEach"></block>
  <block type="controls_repeat"></block>
  <block type="controls_repeat_ext"></block>
  <block type="controls_flow_statements"></block>
</category>

          <category name="Colors" colour="#FF8C1A">
          <block type="colour_picker"></block>
          <block type="colour_random"></block>
          <block type="colour_rgb">
            <value name="RED">
              <block type="math_number">
                <field name="NUM">255</field>
              </block>
            </value>
            <value name="GREEN">
              <block type="math_number">
                <field name="NUM">0</field>
              </block>
            </value>
            <value name="BLUE">
              <block type="math_number">
                <field name="NUM">0</field>
              </block>
            </value>
          </block>
        </category>
      
        <category name="Advanced Colors" colour="#AB63FA">
          <block type="colour_blend">
            <value name="COLOUR1">
              <block type="colour_picker"></block>
            </value>
            <value name="COLOUR2">
              <block type="colour_picker"></block>
            </value>
            <value name="RATIO">
              <block type="math_number">
                <field name="NUM">0.5</field>
              </block>
            </value>
          </block>
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
