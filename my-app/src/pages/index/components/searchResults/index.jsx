import {
    useState,
    useEffect, 
    useSyncExternalStore,
    useTransition,
    memo
  } from 'react';
  
  
  // function SearchResults(props) {
    // const [a, seta] = useState({a: 1});
    // const [b, setb] = useState({b: 2});
    // const [c, setc] = useState({b: 2});
  
    // const {
    //   seta,
    //   setb,
    //   setc
    // } = props;
  
    // const clk = () => {
    //   seta({a: 5})
    //   setb({b: 8})
    //   setc({b: 3})
    // }
    // useEffect(() => {
    //   seta({a: 5})
    //   setb({b: 8})
    //   setc({b: 8})
    // }, [])
  
    // const [value, setValue] = useState();
    // const [searchQuery, setSearchQuery] = useState([]);
    // const [loading, startTransition] = useTransition(2000);
   
    // const handleChange = (e) => {
    //   setValue(e.target.value); //  实时设置输入框的值
    //   // 延迟更新
    //   startTransition(() => {
    //     setSearchQuery(Array(20000).fill(e.target.value)); // 延迟请求搜索的结果，最迟2s后请求
    //   });
    //   // 所有在 startTransition回调中更新的都会被认为是非紧急处理，
    //   // 如果一旦出现更紧急的处理（比如这里的用户输入），
    //   // startTransition 就会中断之前的更新，只会渲染最新一次的状态更新 --- 相当于防抖了--hook防抖
  
    //  };


  function SearchResults(props) {
    const resultList = props.query
    ? Array.from({ length: 10000 }, (_, index) => ({
        id: index,
        keyword: `${props.query} -- 搜索结果${index}`,
    })) : [];

    // console.log('子组件渲染');
  
    return (
      <ul className="index">
          {
            resultList.map(({ id, keyword }) => (
            <li key={id}>{keyword}</li>))
          }
      </ul>
    );
  }
  
  // 使用memo包裹组件，防止紧急更新渲染组件，造成浪费
  export default memo(SearchResults);
  