import { Box, Button, Text, useToast } from '@chakra-ui/react';
import { executeCode } from '../api';
import { useState } from 'react';

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
            <Text mb={2} fontSize='lg' color="#fff">Saída</Text>
            <Button
                variant='outline'
                colorScheme='green'
                mb={4}
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
                    output.map((line, i) => <Text key={i} color="#fff"> {line} </Text>) 
                    : <Text color="#fff"> Clique em "Executar" para visualizar a saída aqui </Text> }
            </Box>
        </Box>
    );   
};

export default OutputEditor;