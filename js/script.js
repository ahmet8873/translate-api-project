const selectTag=document.querySelectorAll("select");
const translateButton=document.querySelector("button");
const fromText=document.querySelector(".from-text");
const toText=document.querySelector(".to-text");
const exchangeIcon=document.querySelector(".exchange");

selectTag.forEach((tag,id)=>{
    for( const country_code in countries){

        let selected;
        if(id==0 && country_code=="en-GB"){
            selected="selected";
        }else if(id==1 && country_code=="tr-TR"){
            selected="selected"
        }

        
        let option=`<option value="${country_code}" ${selected}>${countries[country_code]}</option> `;
        tag.insertAdjacentHTML("beforeend",option);
    }
})

translateButton.addEventListener("click",()=>{
    let text=fromText.value;
    let translateFrom=selectTag[0].value;
    let translateTo=selectTag[1].value;

    let apiUrl=`https://api.mymemory.translated.net/get?q=${text}!&langpair=${translateFrom}|${translateTo}`;

    fetch(apiUrl).then(response=>response.json())
    .then(data=>{toText.value=data.responseData.translatedText;})


})

exchangeIcon.addEventListener("click",()=>{
    let tempText=fromText.value;
    fromText.value=toText.value;
    toText.value=tempText;

    let tempLang=selectTag[0].value;
    selectTag[0].value=selectTag[1].value;
    selectTag[1].value=tempLang;
})

fromText.addEventListener("keydown",(e)=>{
    if(e.keyCode===13){

        let text=fromText.value;
    let translateFrom=selectTag[0].value;
    let translateTo=selectTag[1].value;

    let apiUrl=`https://api.mymemory.translated.net/get?q=${text}!&langpair=${translateFrom}|${translateTo}`;

    fetch(apiUrl).then(response=>response.json())
    .then(data=>{toText.value=data.responseData.translatedText;})

    }
})

