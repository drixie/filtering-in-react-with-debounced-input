import React from "react";
import { useGlobal, setGlobal } from "reactn";
import debounce from "lodash.debounce";

const Searchbox = function () {
  const [inputFilter, setInputFilter] = useGlobal("inputFilter");
  const [debouncedFilter, setDebouncedFilter] = React.useState();
  const [data] = useGlobal("data");

  React.useEffect(() => {
    if (debouncedFilter) {
      setGlobal({
        displayedData:
          data &&
          data.filter(
            (item) =>
              item.email
                .toLowerCase()
                .includes(debouncedFilter.toLowerCase()) ||
              item.firstname
                .toLowerCase()
                .includes(debouncedFilter.toLowerCase()) ||
              item.lastname
                .toLowerCase()
                .includes(debouncedFilter.toLowerCase())
          )
      });
    } else {
      setGlobal({ displayedData: data });
    }
  }, [debouncedFilter, data]);

  const handleDebouncedFilter = React.useRef(
    debounce((nextValue) => setDebouncedFilter(nextValue), 500)
  ).current;

  const handleFilter = function (e) {
    const { value: nextValue } = e.target;
    setInputFilter(nextValue);
    handleDebouncedFilter(nextValue);
  };

  return (
    <div>
      Filter{" "}
      <input type="text" value={inputFilter || ""} onChange={handleFilter} />
      <p>{debouncedFilter}</p>
    </div>
  );
};

export default Searchbox;
