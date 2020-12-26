import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';

const Checkbox = ({ id, label, callback, history, location }) => {
  const [isChecked, setIsChecked] = useState(true);

  const onChangeHandler = () => {
    const params = new URLSearchParams(location.search);
    params.set(id, !isChecked);
    navigate(location.pathname + '?' + params.toString());
    callback(!isChecked);
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    if (params.get(id) === 'false') {
      setIsChecked(false);
      callback(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <input checked={isChecked} type="checkbox" id={id} onChange={onChangeHandler} />
      <label htmlFor={id} className={`label`}>
        {label}
      </label>
    </>
  );
};

export default Checkbox;
