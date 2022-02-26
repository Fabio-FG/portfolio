import portugalFlag from "./images/pt.svg"
import unitedKingdomFlag from "./images/gb.svg"

function Translation() {

    //languages

    const languages = [
        {
          code: "pt",
          name: "Portuguese",
          codename: "PT",
          country_code: "pt",
          country_flag: `${portugalFlag}`
        },
    
        {
          code: "en",
          name: "English",
          codename: "EN",
          country_code: "gb",
          country_flag: `${unitedKingdomFlag}`
        },
      ];
    



    return ( 
        <div>

        </div>
     );
}

export default Translation;