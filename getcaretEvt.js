function getCaretEvt(el){
    let pos = 0;
    const isSupported = typeof window.getSelection !== "undefined";
    if (isSupported) {
        const sel = window.getSelection();
        if(sel.rangeCount !== 0){
            const rng = window.getSelection().getRangeAt(0);
            const preCaretRng = rng.cloneRange();
            
            preCaretRng.selectNodeContents(el);
            preCaretRng.setEnd(rng.endContainer,rng.endOffset);
            pos = preCaretRng.toString().length;
        }
    }
    return pos;
}