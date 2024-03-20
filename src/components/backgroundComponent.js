function Background({backgroundImg}) {
    const html = 
        <div className='backgrounds'>
            <img src={backgroundImg}></img>
        </div>
    return html;
}

export default Background;