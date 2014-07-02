$(function(){

    function hideWhatINeed()
    {
        $(".aboutSteve, .aboutConstable, .contactSteve, .electionDay, .endorsements").hide();
    }

    $('.mainTitle, .defineConstable, .contact, .elect, .endorse').on('click', function () {
        
        var $this = $(this);

        if ($this.html() == 'About Steve Gibbons') {

            hideWhatINeed();
            $('.aboutSteve').show();
        };
        if ($this.html() == 'What is a Constable') {
            hideWhatINeed();
            $('.aboutConstable').show(); 
        };
        if ($this.html() == 'Contact Steve') {
            hideWhatINeed();
            $('.contactSteve').show();
        };
        if ($this.html() == 'Election Day') {
            hideWhatINeed();
            $('.electionDay').show();
        };
        if ($this.html() == 'Endorsements') {
            hideWhatINeed();
            $('.endorsements').show();
        };
    });


});