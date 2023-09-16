
# Course-Registration

This is a one kind of shopping cart project where i have some courses list. I can select these courses and add it in my cart.



## Features

- Real-Time Credit & price Calculation
- Prevent Duplicate Selection
- Toast Notifications
- Dynamically data Loading
- Course Selection & display in cart
- Validation for Available Credits
- Responsive Design


## Discussion

```bash
    const [allCourse, setallCourse] = useState([]);
```

- This state is used to store the list of all available courses which has been fetching from an external JSON file by using __useEffect()__ hook

```bash
    const [clickCourse, setClickCourse] = useState([]);
```

- This state is used to maintain the list of courses that the user has selected. It also handle the update of course list by adding course .

```bash
    const [totalCredit, setTotalCredit] = useState(0);
```

- This state is used for real-time total credit calculation of selected courses. This state is initialized to 0 and being updated when courses are added in the cart.

```bash
    const [creditRemaining, setCreditRemaining] = useState(20);

```
- This state is used for real-time available remaining credit hours calculation. It starts with 20 and decreases according to selected course credits. It ensure that users do not exceed the available credit limit.

```bash
    const [totalPrice, setTotalPrice] = useState(0);
```
- This state is useed for real-time total price calculation of the selected courses. It aslo starts with 0 and being updated when courses are added in the cart.