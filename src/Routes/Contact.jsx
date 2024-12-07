
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context';
import { useContext } from 'react';

const Contact = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div  className={`contact-page ${state.theme}`} >
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
}

export default Contact