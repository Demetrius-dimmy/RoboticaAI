(function($){
    $.fn.extend({ 
        MyPagination: function(options) {
            var defaults = {
                height: 400,
                fadeSpeed: 400
            };
            var options = $.extend(defaults, options);

            //Creating a reference to the object
            var objContent = $(this);

            // other inner variables
            var fullPages = new Array();
            var subPages = new Array();
            var height = 0;
            var lastPage = 1;
            var paginatePages;

            // initialization function
            init = function() {
                objContent.children().each(function(i){
                    if (height + this.clientHeight > options.height) {
                        fullPages.push(subPages);
                        subPages = new Array();
                        height = 0;
                    }

                    height += this.clientHeight;
                    subPages.push(this);
                });

                if (height > 0) {
                    fullPages.push(subPages);
                }

                // wrapping each full page
                $(fullPages).wrap("<div class='page'></div>");

                // hiding all wrapped pages
                objContent.children().hide();

                // making collection of pages for pagination
                paginatePages = objContent.children();

                // show first page
                showPage(lastPage);

                // draw controls
                showPagination($(paginatePages).length);
            };

            // update counter function
            updateCounter = function(i) {
                $('#page_number').html(i);
            };

            // show page function
            showPage = function(page) {
                i = page - 1; 
                if (paginatePages[i]) {

                    // hiding old page, display new one
                    $(paginatePages[lastPage]).fadeOut(options.fadeSpeed);
                    lastPage = i;
                    $(paginatePages[lastPage]).fadeIn(options.fadeSpeed);

                    // and updating counter
                    updateCounter(page);
                }
            };

            // show pagination function (draw switching numbers)
            showPagination = function(numPages) {
                var pagins = '';
                for (var i = 1; i <= numPages; i++) {
                    pagins += '<li><a href="#" onclick="showPage(' + i + '); return false;">' + i + '</a></li>';
                }
                $('.pagination li:first-child').after(pagins);
            };

            // perform initialization
            init();

            // and binding 2 events - on clicking to Prev
            $('.pagination #prev').click(function() {
                showPage(lastPage);
            });
            // and Next
            $('.pagination #next').click(function() {
                showPage(lastPage+2);
            });

        }
    });
})(jQuery);

// custom initialization
jQuery(window).load(function() {
    $('#content').MyPagination({height: 400, fadeSpeed: 400});
});


 var botao = 0;
 function anim_botao() {
  bootbotao = setTimeout("anim_botao()", 3000);
  botao = botao +1;
  if (botao == 6) {botao = 1};
  if (botao == 1)
  {document.form_botao.animado.value = "Developed by Demetrius"};
  if (botao == 2)
  {document.form_botao.animado.value = "Developed by Filipe"};
  if (botao == 3)
  {document.form_botao.animado.value = "Developed by Allan"};
   if (botao == 4)
  {document.form_botao.animado.value = "Developed by Dionatan"};
   if (botao == 5)
  {document.form_botao.animado.value = "Developed by Luis"};
  }
  
 function funcao_botao() {
  if (botao == 1)
  {location.href="http://www.facebook.com/dimmy.deoliveira.7"};
  if (botao == 2)
  {location.href="https://www.facebook.com/filipe.souza.3701?fref=ts"};
  if (botao == 3)
  {location.href="https://www.facebook.com/allan.martins.357284?fref=ts"};
  if (botao == 4)
  {location.href="https://www.facebook.com/dionatan.santos.779?fref=ts"};
  if (botao == 5)
  {location.href="https://www.facebook.com/LuisFelipeLuginski?fref=ts"};
  
 }
 setTimeout("anim_botao()", 10);