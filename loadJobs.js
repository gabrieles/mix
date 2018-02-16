function loadCharityJobs(recruiterName) {
	$.ajax({
	   type: 'GET',
	   url: 'https://www.charityjob.co.uk/recruiter/' + recruiterName, 
	   data: {format: 'html'},
	   success: function(data) {
		  $('#charityJobsContainerLoading').hide();
		  
		  html = '<h2>Jobs</h2>';
		  $('#charityJobsContainer').append(html);
		  
		  var html = $(data).find('.job--recommended');
		  $('#charityJobsContainer').append(html);
		  
		  $('#charityJobsContainer').find('.buttons').remove();
		  $('#charityJobsContainer').find('.button-new').remove();
		  $('#charityJobsContainer').find('.recruiter').remove();
		  $('#charityJobsContainer').find('.content').css('margin-bottom', '50px');
		  
		  html = '<span class="poweredby-text">Powered by</span><br><a href="https://www.charityjob.co.uk"><img width="150" src="https://www.charityjob.co.uk/assets/img/main-logo.svg" alt="CJLogo"></a>';
		  $('#charityJobsContainer').append(html);
		  		  
	   },
	   error: function(jqxhr, status, exception) {
             alert('Exception:', jqxhr);
         }
	});
}
