
export const NumberedList = ({items, sourceName, ItemComponent}) => {
    return (
      <>
          {items.map((item, index) => (
            <>
                <h2>{index+1}</h2>
              <ItemComponent key={index} {...{[sourceName]:item}} />
            </>
          ))}
      </>
    )
  }
  