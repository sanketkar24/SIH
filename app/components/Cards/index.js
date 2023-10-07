'use client'
import React, { useState } from 'react';
import { Card, Tag, Popover, Button } from 'antd';
import './index.css';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
import Head from 'next/head';

function CardDesign(props) {
    const { imageSrc, price, shopName, location, area, footfall, address, tag } = props;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [ isCalendlyVisible, setIsCalendlyVisible ] = useState(false);

    const handleCardClick = () => {
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
    };
    const text = <span>Title</span>;
    const content = (
        <div>
            <RangePicker />
        </div>
    );

    return (
        <Popover placement="bottom" title={text} content={content} trigger="click">
            <Card
                hoverable
                style={{ width: 300}}
                cover={<img alt="example" src={imageSrc} />}
                onClick={handleCardClick}
            >
                <div className='cardHeading'>
                    <h1>{shopName}</h1>
                    <h2>{price}</h2>
                </div>
                <div className='cardDescription'>
                    {area} ∙ {location}
                    <br />
                    {footfall}
                </div>
                <Tag color="green">{tag}</Tag>
                <Button  onClick={() => setIsCalendlyVisible(!isCalendlyVisible)}>
                    Book a meeting
                </Button>
            </Card>
        </Popover>
    );
}

export default CardDesign;
