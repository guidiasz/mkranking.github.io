const backgroundSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1024 256"><path d="M512 0h512v256H512z" class="sky"/><path d="M512 151h512v105H512z" class="ground"/><g class="ticTacToe"><path d="M923 188v-1h1v1h1v1h1v1h1v1h-1v-1h-1v-1h-1v-1h-1Z"/><path d="M926 188v-1h-1v1h-1v1h-1v1h-1v1h1v-1h1v-1h1v-1h1Z" /><path d="M931 186v3h1v1h3v-1h1v-3h-1v-1h-3v1h-1Zm1 0v3h3v-3h-3Z"  clip-rule="evenodd"/><path d="M921 172v-1h1v1h1v1h1v1h1v1h-1v-1h-1v-1h-1v-1h-1Z" /><path d="M921 173h1v1h-1v-1ZM923 171h1v1h-1v-1ZM930 173v-1h1v1h1v1h1v1h-1v-1h-1v-1h-1Z" /><path d="M930 174h1v1h-1v-1ZM932 172h1v1h-1v-1ZM931 179h1v2h-1v-2ZM932 181h2v1h-2v-1ZM934 179h1v2h-1v-2ZM932 178h2v1h-2v-1ZM939 173h1v1h-1v-1ZM938 171h1v2h-1v-2ZM939 170h1v1h-1v-1ZM940 171h1v2h-1v-2Z" /><path d="M936 175v-2h-1v3h1v2h1v-2h6v-1h-7ZM938 178v5h2v-1h4v1h-4v1h-1v2h1v5h-1v-5h-1v-2h-8v1h-1v3h1v4h-1v-4h-1v-3h-3v1h-3v-1h3v-1h3v-5h1v4h8v-5h1ZM922 178h3v-1h-3v1ZM925 177v-1h2v-5h1v8h-1v-2h-2ZM935 176h-7v1h7v-1ZM934 173v-2h1v2h-1Z" /></g><path fill="#000" d="M531 195h2v1h-2v-1ZM533 196h1v1h-1v-1ZM534 193h1v1h-1v-1ZM535 194h1v1h-1v-1ZM537 194h1v2h-1v-2ZM538 193h1v1h-1v-1ZM539 196h1v1h-1v-1ZM540 195h2v1h-2v-1ZM547 187h2v1h-2v-1ZM549 188h1v1h-1v-1ZM550 185h1v1h-1v-1ZM551 186h1v1h-1v-1ZM553 186h1v2h-1v-2ZM554 185h1v1h-1v-1ZM555 188h1v1h-1v-1ZM556 187h2v1h-2v-1ZM595 211h2v1h-2v-1ZM597 212h1v1h-1v-1ZM598 209h1v1h-1v-1ZM599 210h1v1h-1v-1ZM601 210h1v2h-1v-2ZM602 209h1v1h-1v-1ZM603 212h1v1h-1v-1ZM604 211h2v1h-2v-1ZM659 211h2v1h-2v-1ZM661 212h1v1h-1v-1ZM662 209h1v1h-1v-1ZM663 210h1v1h-1v-1ZM665 210h1v2h-1v-2ZM666 209h1v1h-1v-1ZM667 212h1v1h-1v-1ZM668 211h2v1h-2v-1ZM707 195h2v1h-2v-1ZM709 196h1v1h-1v-1ZM710 193h1v1h-1v-1ZM711 194h1v1h-1v-1ZM713 194h1v2h-1v-2ZM714 193h1v1h-1v-1ZM715 196h1v1h-1v-1ZM716 195h2v1h-2v-1ZM731 219h2v1h-2v-1ZM733 220h1v1h-1v-1ZM734 217h1v1h-1v-1ZM735 218h1v1h-1v-1ZM737 218h1v2h-1v-2ZM738 217h1v1h-1v-1ZM739 220h1v1h-1v-1ZM740 219h2v1h-2v-1ZM765 221h2v1h-2v-1ZM767 222h1v1h-1v-1ZM768 219h1v1h-1v-1ZM769 220h1v1h-1v-1ZM771 220h1v2h-1v-2ZM772 219h1v1h-1v-1ZM773 222h1v1h-1v-1ZM774 221h2v1h-2v-1ZM787 195h2v1h-2v-1ZM789 196h1v1h-1v-1ZM790 193h1v1h-1v-1ZM791 194h1v1h-1v-1ZM793 194h1v2h-1v-2ZM794 193h1v1h-1v-1ZM795 196h1v1h-1v-1ZM796 195h2v1h-2v-1ZM875 211h2v1h-2v-1ZM877 212h1v1h-1v-1ZM878 209h1v1h-1v-1ZM879 210h1v1h-1v-1ZM881 210h1v2h-1v-2ZM882 209h1v1h-1v-1ZM883 212h1v1h-1v-1ZM884 211h2v1h-2v-1ZM931 227h2v1h-2v-1ZM933 228h1v1h-1v-1ZM934 225h1v1h-1v-1ZM935 226h1v1h-1v-1ZM937 226h1v2h-1v-2ZM938 225h1v1h-1v-1ZM939 228h1v1h-1v-1ZM940 227h2v1h-2v-1ZM955 195h2v1h-2v-1ZM957 196h1v1h-1v-1ZM958 193h1v1h-1v-1ZM959 194h1v1h-1v-1ZM961 194h1v2h-1v-2ZM962 193h1v1h-1v-1ZM963 196h1v1h-1v-1ZM964 195h2v1h-2v-1ZM978 220h2v1h-2v-1ZM980 221h1v1h-1v-1ZM981 218h1v1h-1v-1ZM982 219h1v1h-1v-1ZM984 219h1v2h-1v-2ZM985 218h1v1h-1v-1ZM986 221h1v1h-1v-1ZM987 220h2v1h-2v-1Z"/><path fill="#040203" d="M513 135h-1v16h512v-17h-1v-1h-1v-1h-1v-1h-1v-1h-2v-1h-4v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-82v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v-1h-4v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-34v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v-1h-4v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v-1h-4v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-82v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v-1h-4v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v-1h-4v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-34v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1Z"/><path d="M513 137v-1h-1v15h15v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1ZM581 131h1v-1h4v1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v9h-38v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1ZM620 124v-1h2v-1h4v1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h-56v-8h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1ZM756 132v-1h2v-1h4v1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h-46v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1ZM876 124v-1h2v-1h4v1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h-62v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1ZM1012 132v-1h2v-1h4v1h2v1h1v1h1v1h1v1h1v16h-31v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1ZM796 140v-1h2v-1h4v1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h-30v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1Z" class="mountain"/><path fill="#040203" d="M586 140h1v1h1v-1h1v-2h-1v-1h-1v1h-1v2ZM632 138h1v1h1v-1h1v-2h-1v-1h-1v1h-1v2ZM636 141h1v1h1v-1h1v-2h-1v-1h-1v1h-1v2ZM747 148h1v1h1v-1h1v-2h-1v-1h-1v1h-1v2ZM760 138h1v1h1v-1h1v-2h-1v-1h-1v1h-1v2ZM764 141h1v1h1v-1h1v-2h-1v-1h-1v1h-1v2ZM888 138h1v1h1v-1h1v-2h-1v-1h-1v1h-1v2ZM893 142h1v1h1v-1h1v-2h-1v-1h-1v1h-1v2ZM1003 148h1v1h1v-1h1v-2h-1v-1h-1v1h-1v2ZM537 133v2h-1v1h-1v1h-2v1h-4v-1h-2v-1h-1v-1h-1v-2h1v-1h1v-1h2v-1h4v1h2v1h1v1h1Z"/><g class="cloud"><path d="M527 133h-1v2h1v1h2v1h4v-1h2v-1h1v-2h-1v-1h-2v-1h-4v1h-2v1Z" /><path fill="#040203" d="M688 124v2h-1v1h-1v1h-2v1h-4v-1h-2v-1h-1v-1h-1v-2h1v-1h1v-1h2v-1h4v1h2v1h1v1h1Z"/><path d="M678 124h-1v2h1v1h2v1h4v-1h2v-1h1v-2h-1v-1h-2v-1h-4v1h-2v1Z"/><path fill="#040203" d="M831 91v2h-1v1h-1v1h-2v1h-4v-1h-2v-1h-1v-1h-1v-2h1v-1h1v-1h2v-1h4v1h2v1h1v1h1Z"/><path d="M821 91h-1v2h1v1h2v1h4v-1h2v-1h1v-2h-1v-1h-2v-1h-4v1h-2v1Z"/><path fill="#040203" d="M944 124v2h-1v1h-1v1h-2v1h-4v-1h-2v-1h-1v-1h-1v-2h1v-1h1v-1h2v-1h4v1h2v1h1v1h1Z"/><path d="M934 124h-1v2h1v1h2v1h4v-1h2v-1h1v-2h-1v-1h-2v-1h-4v1h-2v1Z"/><path fill="#040203" d="M968 116v2h-1v1h-1v1h-2v1h-4v-1h-2v-1h-1v-1h-1v-2h1v-1h1v-1h2v-1h4v1h2v1h1v1h1Z"/><path d="M958 116h-1v2h1v1h2v1h4v-1h2v-1h1v-2h-1v-1h-2v-1h-4v1h-2v1Z"/><path fill="#040203" d="M1023 44v2h-1v1h-1v1h-2v1h-4v-1h-2v-1h-1v-1h-1v-2h1v-1h1v-1h2v-1h4v1h2v1h1v1h1Z"/><path d="M1013 44h-1v2h1v1h2v1h4v-1h2v-1h1v-2h-1v-1h-2v-1h-4v1h-2v1Z"/><path fill="#040203" d="M640 60v2h-1v1h-1v1h-2v1h-4v-1h-2v-1h-1v-1h-1v-2h1v-1h1v-1h2v-1h4v1h2v1h1v1h1Z"/><path d="M630 60h-1v2h1v1h2v1h4v-1h2v-1h1v-2h-1v-1h-2v-1h-4v1h-2v1Z"/></g><path fill="#FA0E06" d="M547 122h-1v-1h1v-1h2v1h-2v1ZM562 106v-1h-1v1h-1v2h1v-2h1ZM552 125v2h-1v-2h1v-2h1v2h-1ZM559 125v2h1v-2h-1v-2h-1v2h1ZM566 116h-2v-1h2v1h2v1h-2v-1ZM564 110h2v1h-2v-1ZM556 120v1h-3v-1h-1v-1h-1v-1h-1v-5h1v-2h1v-1h1v-1h5v1h2v1h1v1h1v5h-1v1h-2v1h-2v-1h-2v-2h-1v-2h1v-1h3v1h1v1h-1v-1h-2v3h4v-1h1v-3h-1v-1h-1v-1h-3v-1h-3v2h-1v2h-1v3h1v1h1v2h3ZM544 114h3v1h-3v-1ZM553 104h1v3h-1v-3ZM546 106h1v1h1v1h1v1h1v1h-1v-1h-1v-1h-1v-1h-1v-1ZM564 120h1v1h1v1h-1v-1h-1v-1Z"/><path fill="#0E0" d="M520 69h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM536 61h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM544 61h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM560 53h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM568 53h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM584 61h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM592 69h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM608 69h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM952 77h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM960 77h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM992 77h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM976 69h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM1000 69h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM1008 77h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM1024 85h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3Z"/><path fill="#F7C600" d="M699 39v-1h3v1h1v1h2v-1h-1v-2h-1v-1h1v-1h1v-1h-3v-1h-1v-1h-1v2h-1v1h-3v1h2v2h-1v2h1v-1h1ZM706 33h1v-1h3v1h-3v1h-1v-1ZM706 36h2v-1h4v1h-4v1h-2v-1ZM819 127v-1h3v1h1v1h2v-1h-1v-2h-1v-1h1v-1h1v-1h-3v-1h-1v-1h-1v2h-1v1h-3v1h2v2h-1v2h1v-1h1ZM826 121h1v-1h3v1h-3v1h-1v-1ZM826 124h2v-1h4v1h-4v1h-2v-1ZM1003 15v-1h3v1h1v1h2v-1h-1v-2h-1v-1h1v-1h1v-1h-3V9h-1V8h-1v2h-1v1h-3v1h2v2h-1v2h1v-1h1ZM1010 9h1V8h3v1h-3v1h-1V9ZM1010 12h2v-1h4v1h-4v1h-2v-1Z"/><path fill="red" fill-rule="evenodd" d="M711 143v1h-2v-2h-1v-1h-1v-1h-1v-1h-1v-2h1v-2h4v1h1v3h-1v1h-1v1h1v2h1Zm-4-4h2v-1h1v-1h-1v-1h-2v3Z" clip-rule="evenodd"/><path fill="red" d="M711 135v-2h1v1h1v2h1v2h2v-1h1v-1h-1v-1h-1v-3h1v2h1v1h1v3h-2v1h-2v-1h-1v-2h-1v-1h-1ZM721 136v-1h1v-2h-4v-1h-1v-3h2v-1h1v1h-1v1h-1v2h5v1h1v1h-1v2h-2ZM727 131v2h-1v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-1h2v2h1v1h3v-1h1v-1h-1v-2h1v1h1v1h1v1h2v1h1v1h-2v-1h-3v1h-2v2h1Z"/><path fill="#F7C600" fill-rule="evenodd" d="M739 126h1v-1h2v-1h1v-1h1v-4h-1v-1h-3v-1h1v-3h-1v-1h-1v1h-1v-1h-2v1h-2v1h-1v1h-2v1h-1v-1h-1v1h-1v1h1v2h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-2Zm-7-7v-1h1v-1h2v-1h3v1h-1v1h-1v1h-1v1h-2v-1h-1Zm3 3v1h1v2h2v-1h1v-1h2v-1h1v-2h-4v1h-2v1h-1ZM632 12v4h8v-1h1v-2h-1v-1h-1v-1h-2v-1h-4v2h-1Zm1 0h1v-1h3v1h2v1h1v2h-7v-3ZM629 22h-4v-2h1v1h3v-2h1v-1h1v-1h2v1h1v1h1v2h4v-2h1v-1h1v-1h3v1h1v3h2v1h-2v1h-1v1h-3v-1h-2v-1h-4v1h-1v1h-4v-1h-1v-1Zm3-1v-1h1v2h-2v-1h1Zm11-1h-1v1h1v-1Z" clip-rule="evenodd"/><path fill="#F7C600" d="M647 18h1v3h-1v-3ZM646 16h1v2h-1v-2ZM645 15h1v1h-1v-1ZM644 14h1v1h-1v-1ZM643 13h1v1h-1v-1ZM642 11h1v2h-1v-2ZM641 10h1v1h-1v-1ZM640 9h1v1h-1V9ZM632 9V8h8v1h-8ZM630 11V9h2v1h-1v1h-1ZM630 11h-1v3h-1v1h-3v2h-1v3h1v-3h1v-1h3v-1h1v-4Z"/><path fill="#F7C600" d="M626 18h1v2h-1v-2Z"/><path fill="#639CF7" d="M844 38v-3h-2v-1h1v-2h1v-1h4v1h1v2h3v-1h2v-1h1v-2h-1v1h-4v-1h-1v-2h1v-1h2v-1h-2v-1h-3v3h-1v1h-2v-1h-1v-1h-1v-1h1v-1h3v-1h5v1h2v1h2v1h1v6h-1v1h-2v1h-8v3h-1ZM846 39h-1v-1h1v1ZM846 39v1h7v-1h1v-4h-1v3h-1v1h-6ZM841 29v-2h1v2h-1ZM841 29h-1v4h1v1h1v-2h-1v-3Z"/><path d="M0 0h512v256H0z" class="sky"/><path d="M0 151h512v105H0z" class="ground"/><g class="ticTacToe"><path d="M411 188v-1h1v1h1v1h1v1h1v1h-1v-1h-1v-1h-1v-1h-1Z"/><path d="M414 188v-1h-1v1h-1v1h-1v1h-1v1h1v-1h1v-1h1v-1h1Z"/><path d="M419 186v3h1v1h3v-1h1v-3h-1v-1h-3v1h-1Zm1 0v3h3v-3h-3Z" clip-rule="evenodd"/><path d="M409 172v-1h1v1h1v1h1v1h1v1h-1v-1h-1v-1h-1v-1h-1Z"/><path d="M409 173h1v1h-1v-1ZM411 171h1v1h-1v-1ZM418 173v-1h1v1h1v1h1v1h-1v-1h-1v-1h-1Z"/><path d="M418 174h1v1h-1v-1ZM420 172h1v1h-1v-1ZM419 179h1v2h-1v-2ZM420 181h2v1h-2v-1ZM422 179h1v2h-1v-2ZM420 178h2v1h-2v-1ZM427 173h1v1h-1v-1ZM426 171h1v2h-1v-2ZM427 170h1v1h-1v-1ZM428 171h1v2h-1v-2Z"/><path d="M424 175v-2h-1v3h1v2h1v-2h6v-1h-7ZM426 178v5h2v-1h4v1h-4v1h-1v2h1v5h-1v-5h-1v-2h-8v1h-1v3h1v4h-1v-4h-1v-3h-3v1h-3v-1h3v-1h3v-5h1v4h8v-5h1ZM410 178h3v-1h-3v1ZM413 177v-1h2v-5h1v8h-1v-2h-2ZM423 176h-7v1h7v-1ZM422 173v-2h1v2h-1Z"/></g><path fill="#000" d="M19 195h2v1h-2v-1ZM21 196h1v1h-1v-1ZM22 193h1v1h-1v-1ZM23 194h1v1h-1v-1ZM25 194h1v2h-1v-2ZM26 193h1v1h-1v-1ZM27 196h1v1h-1v-1ZM28 195h2v1h-2v-1ZM35 187h2v1h-2v-1ZM37 188h1v1h-1v-1ZM38 185h1v1h-1v-1ZM39 186h1v1h-1v-1ZM41 186h1v2h-1v-2ZM42 185h1v1h-1v-1ZM43 188h1v1h-1v-1ZM44 187h2v1h-2v-1ZM83 211h2v1h-2v-1ZM85 212h1v1h-1v-1ZM86 209h1v1h-1v-1ZM87 210h1v1h-1v-1ZM89 210h1v2h-1v-2ZM90 209h1v1h-1v-1ZM91 212h1v1h-1v-1ZM92 211h2v1h-2v-1ZM147 211h2v1h-2v-1ZM149 212h1v1h-1v-1ZM150 209h1v1h-1v-1ZM151 210h1v1h-1v-1ZM153 210h1v2h-1v-2ZM154 209h1v1h-1v-1ZM155 212h1v1h-1v-1ZM156 211h2v1h-2v-1ZM195 195h2v1h-2v-1ZM197 196h1v1h-1v-1ZM198 193h1v1h-1v-1ZM199 194h1v1h-1v-1ZM201 194h1v2h-1v-2ZM202 193h1v1h-1v-1ZM203 196h1v1h-1v-1ZM204 195h2v1h-2v-1ZM219 219h2v1h-2v-1ZM221 220h1v1h-1v-1ZM222 217h1v1h-1v-1ZM223 218h1v1h-1v-1ZM225 218h1v2h-1v-2ZM226 217h1v1h-1v-1ZM227 220h1v1h-1v-1ZM228 219h2v1h-2v-1ZM253 221h2v1h-2v-1ZM255 222h1v1h-1v-1ZM256 219h1v1h-1v-1ZM257 220h1v1h-1v-1ZM259 220h1v2h-1v-2ZM260 219h1v1h-1v-1ZM261 222h1v1h-1v-1ZM262 221h2v1h-2v-1ZM275 195h2v1h-2v-1ZM277 196h1v1h-1v-1ZM278 193h1v1h-1v-1ZM279 194h1v1h-1v-1ZM281 194h1v2h-1v-2ZM282 193h1v1h-1v-1ZM283 196h1v1h-1v-1ZM284 195h2v1h-2v-1ZM363 211h2v1h-2v-1ZM365 212h1v1h-1v-1ZM366 209h1v1h-1v-1ZM367 210h1v1h-1v-1ZM369 210h1v2h-1v-2ZM370 209h1v1h-1v-1ZM371 212h1v1h-1v-1ZM372 211h2v1h-2v-1ZM419 227h2v1h-2v-1ZM421 228h1v1h-1v-1ZM422 225h1v1h-1v-1ZM423 226h1v1h-1v-1ZM425 226h1v2h-1v-2ZM426 225h1v1h-1v-1ZM427 228h1v1h-1v-1ZM428 227h2v1h-2v-1ZM443 195h2v1h-2v-1ZM445 196h1v1h-1v-1ZM446 193h1v1h-1v-1ZM447 194h1v1h-1v-1ZM449 194h1v2h-1v-2ZM450 193h1v1h-1v-1ZM451 196h1v1h-1v-1ZM452 195h2v1h-2v-1ZM466 220h2v1h-2v-1ZM468 221h1v1h-1v-1ZM469 218h1v1h-1v-1ZM470 219h1v1h-1v-1ZM472 219h1v2h-1v-2ZM473 218h1v1h-1v-1ZM474 221h1v1h-1v-1ZM475 220h2v1h-2v-1Z"/><path fill="#040203" d="M1 135H0v16h512v-17h-1v-1h-1v-1h-1v-1h-1v-1h-2v-1h-4v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-82v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v-1h-4v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-34v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v-1h-4v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v-1h-4v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-82v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v-1h-4v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v-1h-4v1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H15v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-1H1v-1Z"/><path d="M1 137v-1H0v15h15v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-1H1ZM69 131h1v-1h4v1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v9H49v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1ZM108 124v-1h2v-1h4v1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1H87v-8h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1ZM244 132v-1h2v-1h4v1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h-46v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1ZM364 124v-1h2v-1h4v1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h-62v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1ZM500 132v-1h2v-1h4v1h2v1h1v1h1v1h1v1h1v16h-31v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1ZM284 140v-1h2v-1h4v1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h-30v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1Z" class="mountain"/><path fill="#040203" d="M74 140h1v1h1v-1h1v-2h-1v-1h-1v1h-1v2ZM120 138h1v1h1v-1h1v-2h-1v-1h-1v1h-1v2ZM124 141h1v1h1v-1h1v-2h-1v-1h-1v1h-1v2ZM235 148h1v1h1v-1h1v-2h-1v-1h-1v1h-1v2ZM248 138h1v1h1v-1h1v-2h-1v-1h-1v1h-1v2ZM252 141h1v1h1v-1h1v-2h-1v-1h-1v1h-1v2ZM376 138h1v1h1v-1h1v-2h-1v-1h-1v1h-1v2ZM381 142h1v1h1v-1h1v-2h-1v-1h-1v1h-1v2ZM491 148h1v1h1v-1h1v-2h-1v-1h-1v1h-1v2ZM25 133v2h-1v1h-1v1h-2v1h-4v-1h-2v-1h-1v-1h-1v-2h1v-1h1v-1h2v-1h4v1h2v1h1v1h1Z"/><g class="cloud"><path d="M15 133h-1v2h1v1h2v1h4v-1h2v-1h1v-2h-1v-1h-2v-1h-4v1h-2v1Z"/><path fill="#040203" d="M176 124v2h-1v1h-1v1h-2v1h-4v-1h-2v-1h-1v-1h-1v-2h1v-1h1v-1h2v-1h4v1h2v1h1v1h1Z"/><path d="M166 124h-1v2h1v1h2v1h4v-1h2v-1h1v-2h-1v-1h-2v-1h-4v1h-2v1Z"/><path fill="#040203" d="M319 91v2h-1v1h-1v1h-2v1h-4v-1h-2v-1h-1v-1h-1v-2h1v-1h1v-1h2v-1h4v1h2v1h1v1h1Z"/><path d="M309 91h-1v2h1v1h2v1h4v-1h2v-1h1v-2h-1v-1h-2v-1h-4v1h-2v1Z"/><path fill="#040203" d="M432 124v2h-1v1h-1v1h-2v1h-4v-1h-2v-1h-1v-1h-1v-2h1v-1h1v-1h2v-1h4v1h2v1h1v1h1Z"/><path d="M422 124h-1v2h1v1h2v1h4v-1h2v-1h1v-2h-1v-1h-2v-1h-4v1h-2v1Z"/><path fill="#040203" d="M456 116v2h-1v1h-1v1h-2v1h-4v-1h-2v-1h-1v-1h-1v-2h1v-1h1v-1h2v-1h4v1h2v1h1v1h1Z"/><path d="M446 116h-1v2h1v1h2v1h4v-1h2v-1h1v-2h-1v-1h-2v-1h-4v1h-2v1Z"/><path fill="#040203" d="M511 44v2h-1v1h-1v1h-2v1h-4v-1h-2v-1h-1v-1h-1v-2h1v-1h1v-1h2v-1h4v1h2v1h1v1h1Z"/><path d="M501 44h-1v2h1v1h2v1h4v-1h2v-1h1v-2h-1v-1h-2v-1h-4v1h-2v1Z"/><path fill="#040203" d="M128 60v2h-1v1h-1v1h-2v1h-4v-1h-2v-1h-1v-1h-1v-2h1v-1h1v-1h2v-1h4v1h2v1h1v1h1Z"/><path d="M118 60h-1v2h1v1h2v1h4v-1h2v-1h1v-2h-1v-1h-2v-1h-4v1h-2v1Z"/></g><path fill="#FA0E06" d="M35 122h-1v-1h1v-1h2v1h-2v1ZM50 106v-1h-1v1h-1v2h1v-2h1ZM40 125v2h-1v-2h1v-2h1v2h-1ZM47 125v2h1v-2h-1v-2h-1v2h1ZM54 116h-2v-1h2v1h2v1h-2v-1ZM52 110h2v1h-2v-1ZM44 120v1h-3v-1h-1v-1h-1v-1h-1v-5h1v-2h1v-1h1v-1h5v1h2v1h1v1h1v5h-1v1h-2v1h-2v-1h-2v-2h-1v-2h1v-1h3v1h1v1h-1v-1h-2v3h4v-1h1v-3h-1v-1h-1v-1h-3v-1h-3v2h-1v2h-1v3h1v1h1v2h3ZM32 114h3v1h-3v-1ZM41 104h1v3h-1v-3ZM34 106h1v1h1v1h1v1h1v1h-1v-1h-1v-1h-1v-1h-1v-1ZM52 120h1v1h1v1h-1v-1h-1v-1Z"/><path fill="#0E0" d="M8 69H7v-3H6v5H5v1H2v-1H1v-1h1v-1h3v-5h1v1h1v1h1v3ZM24 61h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM32 61h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM48 53h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM56 53h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM72 61h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM80 69h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM96 69h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM440 77h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM448 77h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM480 77h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM464 69h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM488 69h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM496 77h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3ZM512 85h-1v-3h-1v5h-1v1h-3v-1h-1v-1h1v-1h3v-5h1v1h1v1h1v3Z"/><path fill="#F7C600" d="M187 39v-1h3v1h1v1h2v-1h-1v-2h-1v-1h1v-1h1v-1h-3v-1h-1v-1h-1v2h-1v1h-3v1h2v2h-1v2h1v-1h1ZM194 33h1v-1h3v1h-3v1h-1v-1ZM194 36h2v-1h4v1h-4v1h-2v-1ZM307 127v-1h3v1h1v1h2v-1h-1v-2h-1v-1h1v-1h1v-1h-3v-1h-1v-1h-1v2h-1v1h-3v1h2v2h-1v2h1v-1h1ZM314 121h1v-1h3v1h-3v1h-1v-1ZM314 124h2v-1h4v1h-4v1h-2v-1ZM491 15v-1h3v1h1v1h2v-1h-1v-2h-1v-1h1v-1h1v-1h-3V9h-1V8h-1v2h-1v1h-3v1h2v2h-1v2h1v-1h1ZM498 9h1V8h3v1h-3v1h-1V9ZM498 12h2v-1h4v1h-4v1h-2v-1Z"/><path fill="red" fill-rule="evenodd" d="M199 143v1h-2v-2h-1v-1h-1v-1h-1v-1h-1v-2h1v-2h4v1h1v3h-1v1h-1v1h1v2h1Zm-4-4h2v-1h1v-1h-1v-1h-2v3Z" clip-rule="evenodd"/><path fill="red" d="M199 135v-2h1v1h1v2h1v2h2v-1h1v-1h-1v-1h-1v-3h1v2h1v1h1v3h-2v1h-2v-1h-1v-2h-1v-1h-1ZM209 136v-1h1v-2h-4v-1h-1v-3h2v-1h1v1h-1v1h-1v2h5v1h1v1h-1v2h-2ZM215 131v2h-1v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-1h2v2h1v1h3v-1h1v-1h-1v-2h1v1h1v1h1v1h2v1h1v1h-2v-1h-3v1h-2v2h1Z"/><path fill="#F7C600" fill-rule="evenodd" d="M227 126h1v-1h2v-1h1v-1h1v-4h-1v-1h-3v-1h1v-3h-1v-1h-1v1h-1v-1h-2v1h-2v1h-1v1h-2v1h-1v-1h-1v1h-1v1h1v2h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-2Zm-7-7v-1h1v-1h2v-1h3v1h-1v1h-1v1h-1v1h-2v-1h-1Zm3 3v1h1v2h2v-1h1v-1h2v-1h1v-2h-4v1h-2v1h-1ZM120 12v4h8v-1h1v-2h-1v-1h-1v-1h-2v-1h-4v2h-1Zm1 0h1v-1h3v1h2v1h1v2h-7v-3ZM117 22h-4v-2h1v1h3v-2h1v-1h1v-1h2v1h1v1h1v2h4v-2h1v-1h1v-1h3v1h1v3h2v1h-2v1h-1v1h-3v-1h-2v-1h-4v1h-1v1h-4v-1h-1v-1Zm3-1v-1h1v2h-2v-1h1Zm11-1h-1v1h1v-1Z" clip-rule="evenodd"/><path fill="#F7C600" d="M135 18h1v3h-1v-3ZM134 16h1v2h-1v-2ZM133 15h1v1h-1v-1ZM132 14h1v1h-1v-1ZM131 13h1v1h-1v-1ZM130 11h1v2h-1v-2ZM129 10h1v1h-1v-1ZM128 9h1v1h-1V9ZM120 9V8h8v1h-8ZM118 11V9h2v1h-1v1h-1ZM118 11h-1v3h-1v1h-3v2h-1v3h1v-3h1v-1h3v-1h1v-4Z"/><path fill="#F7C600" d="M114 18h1v2h-1v-2Z"/><path fill="#639CF7" d="M332 38v-3h-2v-1h1v-2h1v-1h4v1h1v2h3v-1h2v-1h1v-2h-1v1h-4v-1h-1v-2h1v-1h2v-1h-2v-1h-3v3h-1v1h-2v-1h-1v-1h-1v-1h1v-1h3v-1h5v1h2v1h2v1h1v6h-1v1h-2v1h-8v3h-1ZM334 39h-1v-1h1v1ZM334 39v1h7v-1h1v-4h-1v3h-1v1h-6ZM329 29v-2h1v2h-1ZM329 29h-1v4h1v1h1v-2h-1v-3Z"/></svg>`;

const $background = document.querySelector('.background');
$background.insertAdjacentHTML('beforeend', backgroundSvg);
