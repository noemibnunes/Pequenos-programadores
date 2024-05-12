import { Box, Button, Text, useToast } from '@chakra-ui/react';
import { executeCode } from '../api';
import { useState } from 'react';
import styles from './editor.module.css';

const OutputEditor = ({editorRef, language}) => {
    const toast = useToast();
    const [output, setOutput] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false);
    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;
        try {
            setIsLoading(true);
            const {run:result} = await executeCode(language, sourceCode);
            setOutput(result.output.split("\n"));
            result.strderr ? setIsError(true) : setIsError(false);
        } catch (error) {
            console.log(error);
            toast({
                title: "Ocorreu um erro.",
                description: error.message || "Não foi possível executar o código",
                status: "error",
                duration: 6000,
            })
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Box w='50%'>
            <Button className={styles.MenuButton}
                variant='outline'
                colorScheme='green'
                isLoading={isLoading}
                onClick={runCode}
            >
                Executar
            </Button>
            <Box
               height='75vh'
               p={2}
               color={isError ? "red.400" : ""}
               border='1px solid'
               borderRadius={4}
               borderColor={isError ? "red.500" : "#333"}
            >
               { output ? 
                    output.map((line, i) => <Text key={i} color="#000"> {line} </Text>) 
                    : <Text color="#000"> Clique em "Executar" para ver o que acontece! </Text> }
            </Box>
        </Box>
    );   
};

export default OutputEditor;