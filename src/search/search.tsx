function SearchBar(){
    return (
        <>
        <div className="searchBox">
   <div className="searchBoxCard">
      <a href="javascript:void(0);" className="searchBoxClose">
         <i className="fa-solid fa-xmark"></i>
      </a>
      <div className="searchBoxInner">
         <div className="searchBoxLogo">
            <img src="images/logo/logo-white.png" alt="search" className="img-fluid"/>
         </div>
         <div className="searchBoxForm">
            <div className="input-group">
               <input type="text" className="form-control" placeholder="Search..."/>
               <button type="button" className="btn btnSecondary">Search</button>
            </div>
         </div>
      </div>
   </div>
</div>
        </>
    );
}

export default SearchBar