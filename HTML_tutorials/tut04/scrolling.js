
jQuery
(
    function($)
    {
        //zresetuj scrolla
        $.scrollTo(0);

        $('.scrollup').click(function() { $.scrollTo($('body'), 1000); });

        $('#link1').click(function() { $.scrollTo($('#budowacrt'), 1000); });
        $('#link2').click(function() { $.scrollTo($('#zasadacrt'), 1000); });
        $('#link3').click(function() { $.scrollTo($('#maskicrt'), 1000); });
        $('#link4').click(function() { $.scrollTo($('#wadycrt'), 1000); });
        $('#link5').click(function() { $.scrollTo($('#doborcrt'), 1000); });

        $('#link6').click(function() { $.scrollTo($('#budowalcd'), 1000); });
        $('#link7').click(function() { $.scrollTo($('#zasadalcd'), 1000); });
        $('#link8').click(function() { $.scrollTo($('#podziallcd'), 1000); });
        $('#link9').click(function() { $.scrollTo($('#wadylcd'), 1000); });
        $('#link10').click(function() { $.scrollTo($('#doborlcd'), 1000); });

        $('#link11').click(function() { $.scrollTo($('#zlaczevga'), 1000); });
        $('#link12').click(function() { $.scrollTo($('#zlaczedvi'), 1000); });
        $('#link13').click(function() { $.scrollTo($('#zlaczehdmidp'), 1000); });

        $('#link14').click(function() { $.scrollTo($('#przyszlosc'), 1000); });
        $('#link15').click(function() { $.scrollTo($('#agenda'), 1000); });

    }
);

    //pokaż podczas przewijania

    $(window).scroll
    (
        function()
        {
            if($(this).scrollTop()>300)
            {
                $('.scrollup').fadeIn();
            }
            else
            {
                $('.scrollup').fadeOut();
            }
        }

    );

