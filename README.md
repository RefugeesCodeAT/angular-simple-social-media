# angular-simple-social-media
this is a simple social media as a front-end using Angular framework.

# Step-By-Step

- Initialize environement
	- make repo. with your github profile
	- copy it inside you pc.
	- access this folder or repo and install new Angular project with a name.
	- Push to your repo. Done.
- Create a componenet for posts component.
	- create folder called componenets
	- create the componenet with ng g c posts
	- for the required to bind it with root componenet.
	- we did the styleing of the part componenet or (Root).
- Styling th posts componenet
	- Create the html content.
	- style every element of the posts component.

- Prepare for service
	- design your http service in GENERAL.
	- Prepare you module with this service.
	- decide if your service is shared or private.
	- Combine it with your components.
	- Inject it with component.
	- test
- Bind data with the view
	- design your logic in the view (html in the root)

---

Social-Media-part-2

- Creating routing as test
	- Create routing module using "ng g m routes --routing"
	- Correct some lines.
	- Bind the routing with the main app.module.ts
	- Create components as pages.
	- Bind components that act like pages with routing 
	- Test the project was not successful.
	- Fixing the main app.component.html
	- Add default page as error if there is no route with the same path

- Redesigning the pages
	- Navbar component
		- Cereate navbar as component
		- Do the styling of navbar
		- Add routerLink as links for the pages of our app.
	- Create about us page
		- Create aboutus as page
		- Do the styling
		- Bind the component with routing so it acts like a page
		- Go to the navbar and change the routerLink to the correct link as routing path
	- Create all posts page
		- Create allposts page.
		- Styling for allpost page.
		- Bind allposts page with routing module.
		- Bind the link of allposts to the navbar.
		- Implement http request
		- Reduce the info inside all post
		- create another component called postindetails as page
		- Bind it with routing.
		- Add shared serivce between components.
		- implement the sharing logic.
