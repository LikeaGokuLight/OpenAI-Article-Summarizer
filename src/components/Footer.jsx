const Footer = () => {
    const date = new Date();

    return (
        <footer className="fixed bottom-0 w-full h-[40px]">
            <p className="flex justify-center items-center font-bold font-satoshi">
                Copyright © {date.getFullYear()} made by Vitali Passaro with 🧡
                All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;

// flex justify-center items-center orange_gradient fixed bottom-0
