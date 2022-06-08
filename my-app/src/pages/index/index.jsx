import {
  useState,
  useEffect,
  useLayoutEffect,
  useSyncExternalStore,
  useTransition,
  useDeferredValue,
  startTransition
} from 'react';
import  {flushSync} from 'react-dom';
import SearchResults from './components/searchResults';


function Index(props) {
  const [a, seta] = useState({a: 1});
  const [b, setb] = useState({b: 2});
  const [c, setc] = useState({b: 2});

  const [w, setw] = useState(5);
  const [r, setr] = useState(6);
  const [flag, setFlag] = useState(false);


  // const {
  //   seta,
  //   setb,
  // } = props;

  const handleClk = () => {
    // seta({a: 5})
    // setb({b: 8})
    // setc({b: 3});
    // setw(9)
    Promise.resolve().then(() => {
      seta({a: 5})
      setb({b: 8})
      setc({b: 3});
      flushSync(() => {
        setw(c => c + 1);
        setFlag(f => !f);
      })
      flushSync(() => {
        setw(9)
      })
    });
    Promise.resolve().then(() => {
      setw(c => c + 1);
      setFlag(f => !f);
    });

    // setTimeout(() => {
    //   seta({a: 5})
    //   setb({b: 8})
    //   setc({b: 3});
    // }, 500);
    // setTimeout(() => {
    //   setw(c => c + 1);
    //   setFlag(f => !f);
    // }, 500);
    console.log('点击');
  }

  // useEffect(() => {
  //   console.log('effect, index');
  // }, [])

  // useLayoutEffect(() => {
  //   console.log('useLayoutEffect, index');
  // }, [])



    


    // 所有在 startTransition回调中更新的都会被认为是非紧急处理，
    // 如果一旦出现更紧急的处理（比如这里的用户输入），
    // startTransition 就会中断之前的更新，只会渲染最新一次的状态更新 --- 相当于防抖了--hook防抖

    // startTransition和useTransition可以让你更新一些不紧急的state。
    // 其它state的更新默认视为紧急。React会允许紧急的state更新（例如，输入框内容更新）来打断不紧急的state更新（例如，渲染搜索结果


  //  渲染100000个搜索结果，可以使用memo（延迟值被紧急更新阻断会不更新，引用则不变化，memo则不执行）监听useDeferredValue返回的延迟值，变化再render。也可以不使用memo，延迟值不更新则return nul;







  const [value, setValue] = useState('');
  // const [searchQuery, setSearchQuery] = useState('');

  // loading 是否延迟更新完成-true过渡中-false过渡结束  startTransition 是一个接受回调的函数，用于告知React需要延迟更新的state
  const [isPending, startTransition] = useTransition();
 
  const handleChange = (e) => {
    setValue(e.target.value); // 实时设置输入框的值
    
    // Promise.resolve().then(() => {
    //   console.log('pro执行');
    // });

    // // 延迟更新
    // startTransition(() => {
    //   console.log('startTransition执行');
    //   setSearchQuery(e.target.value);
    // });
  };

  const searchValue = useDeferredValue(value);

  // console.log(isPending, '过渡', searchQuery);
  // console.log('父渲染');

  return (
    <div className="index">
      <div>index</div>
      {/* <div onClick={handleClk}>点击</div> */}
      <input value={value} onChange={handleChange} />
      <SearchResults
        query={searchValue}
        // query={searchQuery}
      />
    </div>
  );
}

export default Index;
