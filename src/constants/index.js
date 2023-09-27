import profile from "../assets/profile.png";
import home_service from "../assets/home_service.png";
import inventory_system_png from "../assets/inventory.png";
import forex from "../assets/forex.png";
import medicare from "../assets/medicare.png"

export const about = {
    description:"A coding enthusiast with a deep love for turning lines of text into functional pieces of art. My world revolves around creating elegant and efficient solutions that enhance everyday life.With a particular fondness for mobile development, I'm on a constant quest to transform ideas into seamless user experiences. Join me as I navigate the ever-evolving landscape of technology, one line of code at a time."
};

export const projects = [
    {key: "1",title: "Home Service Mobile Application", description: "A mobile application implemented using KOTLIN and Firebase Realtime database with google authentication where a customer can hire service providers and purchase goods that needed to get completed their service via the application.", image:home_service, link:"https://github.com/sandaruperera/Home_Service_App"},
    {key: "2",title: "Sales And Inventory Management System", description: "implemented using C# and SQL to manage sales and inventory of an agricultural company to manage their inventory and sales with invoices, GRN, deliveries and reports", image:inventory_system_png, link:"https://github.com/sandaruperera/SalesAndInventoryManagementSystem"},
    {key: "3",title: "Medicare Web Application", description: "Implemented using JAVA Spring Boot REST API, MySQL, and React JS where patients can channel doctors according to their specialization, access their bookings by submitting the contact number and where doctors can handle their schedules, patients, and issue prescriptions through the system.", image:medicare, link:"https://github.com/sandaruperera/Medicare_and_E-ChannelingSystem"},
    {key: "4",title: "Forex Journaling and Risk/Profit Management System", description: "Implemented using C# to journal trades and calculate profits based on popular currency pairs, manage risk, and keep a history of trades using details and screenshots of the relevant trades", image:forex, link:"https://github.com/sandaruperera/Forex_Profit_Management_System"},
    
];

export const services = [
    {key: "1", title: "UI/UX Deisgn", subtitle: "Designing Delightful Experiences", body:"Step into a world where design meets usability. I craft interfaces that are both visually pleasing and user-friendly. Let's make your users fall in love with every tap and click."},
    {key: "2", title: "Web Development", subtitle: "Weaving Digital Magic", body:"Bringing your ideas to the web! I create websites that look great and work even better. Get ready to establish your online presence with a website that shines on every screen."},
    {key: "3", title: "Mobile Application Development", subtitle: "Your App, Your Way", body:"Empowering businesses through mobile apps. I build apps that users enjoy and businesses benefit from. Let's turn your app idea into a reality that users carry in their pockets."}
]

export const contactOptions ={
    linkedIn: "https://www.linkedin.com/in/sandaru-perera-277668258/",
    email: "sandaruxd99@gmail.com"
}
