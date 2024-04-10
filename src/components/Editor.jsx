import React, { useRef, useState } from 'react';
import { Box, Button, HStack, Menu, MenuButton, Text } from "@chakra-ui/react";
import { Editor } from '@monaco-editor/react'; 
import OutputEditor from './OutputEditor';

const CodeEditor = () => {
  const editorRef = useRef()
  const [value, setValue] = useState('');

  const onMount= (editor) => {
    editorRef.current = editor;
    editor.focus()
  }

  return (
    <Box>
      <HStack spacing={4}>
        <Box w='50%'>
          <Text mb={2} fontSize='lg' color="#fff">Linguagem: </Text>
          <Menu isLazy>
            <MenuButton as={Button}>
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

export default CodeEditor;
