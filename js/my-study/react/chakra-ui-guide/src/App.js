import {
	Button,
	Box,
	Text,
	useColorMode,
	useColorModeValue
} from '@chakra-ui/react';

function App() {
	const {colorMode, toggleColorMode} = useColorMode();
	const bgColor = useColorModeValue('tomato', 'skyblue');
	return (
		<Box w="100px" h='100px' bgColor={bgColor}>
			<Text>当前的主题是{colorMode}</Text>
			<Button onClick={toggleColorMode}>切换主题</Button>
		</Box>
	);
}

export default App;
