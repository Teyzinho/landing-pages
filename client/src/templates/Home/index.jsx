import * as Styled from './styles';
import { useEffect, useRef, useState } from 'react';

import { Base } from '../Base';
import { mapData } from '../../api/map-data';
import { mockBase } from '../Base/stories';

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      console.log('fetching');
      const data = await fetch(
        'http://localhost:1338/api/pages/?filters[slug]=landing-page&populate=deep',
      );
      const json = await data.json();
      const { attributes } = json.data[0];
      const pageData = mapData([attributes]);
      console.log(pageData);
      setData(() => pageData[0]);
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  return <Base {...mockBase} />;
}

export default Home;
