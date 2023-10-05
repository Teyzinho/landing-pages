import * as Styled from './styles';
import { useEffect, useRef, useState } from 'react';

import { Base } from '../Base';
import { mapData } from '../../api/map-data';
import { mockBase } from '../Base/stories';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      try {
        console.log('fetching');
        const data = await fetch(
          'http://localhost:1338/api/pages/?filters[slug]=landing-page&populate=deep',
        );
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);

        setData(() => pageData[0]);
      } catch (error) {
        setData(undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  return <Base {...mockBase} />;
}

export default Home;
