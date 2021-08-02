import './App.css';
import { ThemeProvider } from "styled-components"
import {  QueryClient, QueryClientProvider } from 'react-query';
import { Posts } from "./containers/posts"

const theme = {
  primary: "blue",
  secondary: "black",
  third: "red"
};

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Posts />
        </ThemeProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
