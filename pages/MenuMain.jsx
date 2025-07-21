import { useState } from "react"
import MenuItem from "./MenuItem"

export default function MenuMain() {

    const appetizerItems = [
        {
            title: 'Chips and House Made Salsa',
            description: 'Delicious salsa and jalepenos.',
            imageUrl: '../assets/chips-and-salsa.png',
            price: '$5'
        },
        {
            title: 'Chicken Nachos',
            description: 'Grilled Chicken, Shredded Cheese Blend, Red Onions, Diced Tomatoes, Fresh Thinly Sliced Jalapenos. Topped with a scoop of Sour Cream and House Made Guacamole. Served with a Side of House Made Salsa.',
            imageUrl: '../assets/nacho-pic.JPG',
            price: '$12'
        },
        {
            title: 'Coconut Shrimp',
            description: 'Seven delicious coconut shirpms served with Sweet Chili Sauce.',
            imageUrl: '../assets/coconut-shrimp.png',
            price: '$13'
        },
        {
            title: 'Fried Pickle Spears',
            description: 'Five decedant coconut shirpms served with house made Ranch dressing.',
            imageUrl: '../assets/fried-pickle-spears.png',
            price: '$9'
        },
        {
            title: 'House Made Hummus',
            description: 'Served with warm pita bread.',
            imageUrl: '../assets/house-made-hummus.png',
            price: '$9'
        },
        {
            title: 'Wings',
            description: 'Six bone-in wings tossed in Your Choice of BBQ or Buffalo Sauce. Served with a Side of Celery and House Made Ranch.',
            imageUrl: '../assets/wings.png',
            price: '$10'
        },
        {
            title: 'Wisconsin Cheese Curds',
            description: 'Served with House Made Ranch.',
            imageUrl: '../assets/wisconsin-cheese-curds.JPG',
            price: '$10'
        },
        {
            title: 'Baked Brie',
            description: 'Topped with House Made Rasbery Green Chili.',
            imageUrl: '../assets/brie.JPG',
            price: '$10'
        },
        {
            title: 'Jalapeno Poppers',
            description: 'Eight delicious served with House Made Ranch.',
            imageUrl: '../assets/jalepeno-poppers.JPG',
            price: '$10'
        },
        {
            title: 'Basket of Fresh Cut Fries',
            description: 'Delectible basket of fries.',
            imageUrl: '../assets/fries.JPG',
            price: '$7'
        }
    ]

    const burgerItems = [
        {
            title: 'Easy Way',
            description: 'Honey glazed bacon, American Cheese and Blonde BBQ Sauce. Topped with Cole Slaw and Crispy Fried Onions. Served on a Brioche Bun.',
            imageUrl: '../assets/easy-way.JPG',
            price: '$11'
        },
        {
            title: 'Royal With Cheese 👑',
            description: 'American Cheese, Chopped White Onion, Pickles Mustard, and Ketchup.  Served on a Sesame Seed Bun.',
            imageUrl: '../assets/royal.jpg',
            price: '$10'
        },
        {
            title: 'The Heater',
            description: 'Grilled Onions and Jalapenos, Pepperjack Cheese, and a House Made Green Chili Cream Cheese Spread. Served on a Brioche Bun.',
            imageUrl: '../assets/heater.jpg',
            price: '$10'
        },
        {
            title: 'Classic',
            description: 'Lettuce, Tomato, Pickle, and Onion. Served with Mayo on a Sesame Seed Bun.',
            imageUrl: '../assets/classic.JPG',
            price: '$10'
        }
    ]

    const otherItems = [
        {
            title: 'The Blind Pig',
            description: 'Slow Cooked Pulled Pork. Served with Your Choice of Regular, Blonde, or Spicy BBQ Sauce and Side of Coleslaw, Pickles, Pickled Okra, Red Onion, and House Made Potato Chips.',
            imageUrl: '../assets/bbq.jpg',
            price: '$11'
        },
        {
            title: 'Chicken Quesadilla',
            description: 'Grilled Chicken, Shredded Cheese Blend, Grilled Onions. Served with a Side of Sour Cream and House Made Salsa and Guacamole.',
            imageUrl: '../assets/quesadilla-pic.jpg',
            price: '$11'
        }
    ]
    // const [app, setApp] = useState(appetizerItems)
    const app = appetizerItems

    // let i = 0
    const appetizerObjs = appetizerItems.map(item => <MenuItem item={item}/>)
    const burgerObjs = burgerItems.map(item => <MenuItem item={item}/>)
    const otherObjs = otherItems.map(item => <MenuItem item={item}/>)

    return (
        <main className="menu-main">

            <h2>~Appetizers~</h2>
            <br/>
            <ul className="menu-list">
                {appetizerObjs}
            </ul>

            <h2>~Burgers~</h2>
            <br/>
            <ul className="menu-list">
                {burgerObjs}
            </ul>

            <h2>~Others~</h2>
            <br/>
            <ul className="menu-list">
                {otherObjs}
            </ul>
       

            
            
        
        </main>
       
    )
}