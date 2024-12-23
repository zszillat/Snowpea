# Snowpea
Digital Recipe Book Web Application

#### Tech Stack

- Frontend: ReactJS
- Backend: Appwrite
- Database: Appwrite's integrated database
- Authentication: Google OAuth
<br>

**Minimum Viable Product To-Do List**

- ~~Create Initial ReactJS Project~~
    - ~~Install Appwrite~~
    - ~~Create Routes and Components~~
    - ~~Setup CRUD~~
        - ~~Setup Appwrite Project~~
        - ~~Create Database Schema (Recipe and GoogleAccounts Table)~~
        - ~~Create CRUD Operations (FetchRecipe, CreateRecipe, UpdateRecipe, DeleteRecipe)~~
    - **Authentication**
        - Setup OAuth for Google
        - Create a row in GoogleAccount table upon first login
        - Check that the user is properly logged in on every page
        - Add verification so users can only view, edit, and delete their recipes
    - **Polish**
        - Add Basic CSS
        - Form Verification
        - Find Domain
        - Deploy to Server
        - Error Handling

### Future Features
- Share Recipes
    - Share your recipes publicly or with friends
    - Browse and save recipes shared by others
    - Add tags to recipes for better organization (e.g., Breakfast, Quick)
- Organize Recipes
    - Sort recipes into folders for easier management
- Enhance User Interaction
    - Add checkboxes next to instructions for tracking progress along with a reset button
    - Provide nutritional information for recipes
