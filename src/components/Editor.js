import React, { useRef, useState } from 'react';
import { Box, Button, HStack, Menu, MenuButton } from "@chakra-ui/react";
import { Editor } from '@monaco-editor/react'; 
import OutputEditor from './OutputEditor';
import styles from './estilosComponents/editor.module.css';

export default function CodeEditor () {
  const editorRef = useRef()
  const [value, setValue] = useState('');

  const onMount= (editor) => {
    editorRef.current = editor;
  }

  return (
    <Box>
      <HStack spacing={4}>
        <Box w='50%'>
          <Menu isLazy>
            <MenuButton as={Button} className={styles.MenuButton}>
              Python
            </MenuButton>
          </Menu>
          <Editor
            height="75vh"
            theme="vs-dark"
            defaultLanguage="python"
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <OutputEditor editorRef={editorRef} language='python'/>
      </HStack>
    </Box>
  );
};
