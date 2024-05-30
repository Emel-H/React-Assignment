# Your project title

![image](https://github.com/Emel-H/React-Assignment/assets/114482435/5c73bc36-f8b0-4f15-b8d9-7ebe931be5a1)

This is an assignment that focuses on the ecomers website where the main learnings are to use React and related technologies. Here we learn about React as a framework and how to use libraries such as Bootstrap and Zustand within this framework.

## Description

In this assignment, I used thy Noroff API to retrieve project and product information(REST API). The website has the following pages for an eCom store:

- Homepage
- Individual product page
- Cart page
- Checkout success page

The website has a  look-ahead search bar that filters products when typing in a product name when clicking on a product it takes a user to an individual product page.

I have used a <Layout> component that contains a header and footer. 

The header contains a nav bar as well as a Cart icon component that acts as a button as well as displays the current number of items in the cart.

I have an Add to Cart button which, upon clicking, adds the product to the cart. The product page displays the title of the product, the description, and the image. One can also review listed for the product. I have used the discountedPrice property to display the price of the product and calculated the percentage discount to inform the user.

When clicking on the Cart icon it will load the Cart page, which will list all of the products as well as a total. The Cart page has a Checkout button. Clicking this Checkout button then takes you to a Checkout success page.

The Checkout success page will display a message to the user notifying them that their order was successful. 
There is also a link that lets a user go back to the store. The cart is cleared if the user gets to the Checkout success page.

There is also a contact page, which contains a contact form that is validated.

I have used React Router to switch between pages, and the design is responsive as well.

## Built With

This is a list of the tech stack I have used on assignment:

- [React.js](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com)
- [React-bootstrap](https://react-bootstrap.netlify.app/)
- [React-hook-form](https://react-hook-form.com/)
- [Styled-components](https://styled-components.com/)
- [Yup](https://github.com/jquense/yup)
- [Zustand](https://github.com/pmndrs/zustand)

## Getting Started

### Installing

To get the project started, first, you have to clone the repo and then install the dependencies.

1. Clone the repo:

```bash
git clone git@github.com/Emel-H/React-Assignment.git
```

2. Install the dependencies:

```
npm run build
```

### Running

To run the app, run the following commands:

```bash
npm start
```

## Contributing

For anyone who wants to contrubiot, submit a pull request with your suggested changes and I will review and approv the submission. 

## Contact

I can be contacted at my Linkedin profile.

[My LinkedIn page](https://www.linkedin.com/in/emel-j-h-415905169/)
