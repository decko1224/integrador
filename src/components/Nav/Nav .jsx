import React from "react";
import SerchBar from " ../components/SearchBar"

export default function Nac(props) {
    return (
        <div>
            <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
        </div>
    )
}