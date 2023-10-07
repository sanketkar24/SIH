import React from 'react';
import './faq.css'
const AccordionItem = ({ id, title, content }) => {
    return (
        <section classnameName="accordion" id={id}>
            <h1 classnameName="title">
                <a href={`#${id}`}>{title}</a>
            </h1>
            <div classnameName="content">
                <div classnameName="wrapper">
                    <p>{content}</p>
                </div>
            </div>
        </section>
    );
};

const Accordion = () => {
    return (
        <div classname="accordion w-100" id="basicAccordion">
            <div classname="accordion-item">
                <h2 classname="accordion-header" id="headingOne">
                    <button classname="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#basicAccordionCollapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Question #1
                    </button>
                </h2>
                <div id="basicAccordionCollapseOne" classname="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-mdb-parent="#basicAccordion" >
                    <div classname="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default,
                        until the collapse plugin adds the appropriate classnamees that we use to style each
                        element. These classnamees control the overall appearance, as well as the showing and
                        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just about any HTML can go within
                        the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div classname="accordion-item">
                <h2 classname="accordion-header" id="headingTwo">
                    <button classname="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#basicAccordionCollapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Question #2
                    </button>
                </h2>
                <div id="basicAccordionCollapseTwo" classname="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-mdb-parent="#basicAccordion" >
                    <div classname="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default,
                        until the collapse plugin adds the appropriate classnamees that we use to style each
                        element. These classnamees control the overall appearance, as well as the showing and
                        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just about any HTML can go within
                        the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div classname="accordion-item">
                <h2 classname="accordion-header" id="headingThree">
                    <button classname="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#basicAccordionCollapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Question #3
                    </button>
                </h2>
                <div id="basicAccordionCollapseThree" classname="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-mdb-parent="#basicAccordion" >
                    <div classname="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default,
                        until the collapse plugin adds the appropriate classnamees that we use to style each
                        element. These classnamees control the overall appearance, as well as the showing and
                        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just about any HTML can go within
                        the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
        // <main>
        //   <AccordionItem
        //     id="overview"
        //     title="Overview"
        //     content="This CodePen demonstrates how we can animate the opening and closing states of an accordion with fancy reveal animation using only CSS. This concept is suitable for creating FAQ sections, Table of Contents, and more."
        //   />

        //   <AccordionItem
        //     id="how-does-it-work"
        //     title="How does it work?"
        //     content="We cannot transition height or any CSS property from zero to auto. If we want to smoothly expand a collapsed accordion, we could set a max-height and transition the height property to a large value when we expand the section. However, it may not properly work if the content is larger than the max-height. So, here we create a CSS grid with a grid item. Then we transition the grid-template-rows property from 0fr to 1fr and the grid item transitions to its content height. I used CSS clip-path and mix-blend-mode to animate the background and text color of the accordion. Each accordion has two pseudo-elements. We know that opacity, clip-path, and, visibility are animatable CSS properties. So when the accordion is selected using the :target pseudo-classname, we transition the clip-path circle radius to 200% of the ::before pseudo-element. When the accordion is not selected, we do the same with the ::after but this time with a delay. This creates an illusion as it appears to clip from inside. Since the accordion's title is an anchor element, users can also navigate through the items with their keyboard."
        //   />

        //   <AccordionItem
        //     id="inspiration"
        //     title="Inspiration"
        //     content="In a recent video, Kevin showed us a way to animate height from zero to an auto value. Seeing that, I couldn't resist experimenting with the idea. Then I came up with this CSS-only accordion component and added the reveal animation too! I would highly recommend watching his video, where he beautifully explains the technique and points out how he discovered it. Also, read Keith J. Grant's post and Nelson Menezes's post on the same topic."
        //   />
        // </main>
    );
};

export default Accordion;
