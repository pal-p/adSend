module.exports = (advertisement) => {

   //return '<div> Hello there!</div>'
  // return '<div>'+advertisement.body+'</div>'
  console.log(advertisement.salesUrl);
  return `<html>
         <body>
            <div style="text-align: center">
              <h1 style="color: green"> Super Sale!</h1>
              <h2 style="color: tomato"> ${advertisement.title}</h2>
              <p style="color: green"> ${advertisement.body}</p>
              
              <div>
                 <a href=${advertisement.salesUrl} style="color: red"> Shop Now</a>
                  
              </div>
            </div>
         </body>
       </html>`
};
