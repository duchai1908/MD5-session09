import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { notification } from "antd";

function App() {
  const [count, setCount] = useState(0);
  const loadData = () => {
    axios
      .get("http://localhost:8080/products/category/7")
      .then((resp) => console.log(resp.data))
      .catch((err) =>{
        notification.error({message: err.response.data.messages})
      }
        // console.log(err)
     
      );
  };
  useEffect(() => {
    loadData();
  });

  return <>App</>;
}

export default App;
