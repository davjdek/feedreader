/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    
    describe('RSS Feeds', function() {
        /* this tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* this test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
		 
        
        it('URL is defined and not empty', function() {
			allFeeds.forEach(function(val,index,arr){
				expect(val.url).toBeDefined();
				expect(val.url).not.toBe('');
			});
            
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
		 
		 it('name is defined and not empty', function() {
			allFeeds.forEach(function(val,index,arr){
				expect(val.name).toBeDefined();
				expect(val.name).not.toBe('');
			});
            
        });
		 
    });


	
	 describe('The menu', function() {

        /* This test ensures the menu element is
         * hidden by default. 
         */
		 
		 it('element is hidden by default', function() {
			expect($('body').hasClass('menu-hidden')).toBe(true);
			});
            
        

         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. 
          */
		  
		  it('changes visibility when the menu icon is clicked', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toEqual(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toEqual(true);
          });
		 });
		  


    
	 describe("Initial Entries", function() {

        beforeEach(function(done) {
			loadFeed(0, function() {
				done();
			});
		});

        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

		 it("there is at least a single .entry element within the .feed container", function(done) {
			var entries = $(".feed .entry").length;
			expect(entries).toBeGreaterThan(0);
			done();
		});
	});
		 
 
	
	 describe('New Feed Selection', function() {
		//store the first feed into the variable load, then load a new feed
		var old;
		beforeEach(function(done) {
            loadFeed(0, function() {                
                old = $('.feed').html();                
                loadFeed(1,  function() {
					done();
				});
            });
        });
		
		/* This test ensures when the new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
		 it("content changes when feed loaded", function(done) { 
			expect($(".feed").html()).not.toBe(old);
			done();
		});		 
		
	});        
	
}());
