import { useState, useEffect } from "react";

export const Booklist = ({language, getData}) => {
    const [bookData, setBookData] = useState(null);

    useEffect(() => {
        getData?.(language).then((response) =>
          setBookData(response)
        );
      }, [language, getData]);

    return (
        <ul>
            {bookData === null ? (
                <p>now loading...</p>
            ) : (
                bookData.data.items.map((x, index) => (
                    <li key={index}><a href={x.volumeInfo.previewLink} target="_blank">{x.volumeInfo.title}</a>: {x.volumeInfo.authors}</li>
                ))
            )}
        </ul>
    );
  };