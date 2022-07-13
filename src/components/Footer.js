import { Container, Row, Col, } from 'reactstrap';
import Map from '../app/assets/img/map.PNG';

const Footer = () => {
    return (
        <footer>
            
            <Container className='top-footer container-fluid pt-3'>
                <Row>
                    
                    <Col xs='9' sm className='text-end'>
                        <img src={Map} alt='map-location' className='map-image' />
                    </Col>

                    <Col sm='' className='text-start'>
                        <h5>Porto Animal Shelter</h5>
                            <address>123 Main St <br />
                            Anywhere, USA 12345 <br /></address>
                        <a role='button'
                            className=''
                            href='tel:+13125551234'>
                            <i className='fa fa-phone' />1-312-555-1234
                        </a>
                        <br />
                        <a
                            role='button'
                            className=''
                            href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o' /> info@porto.com
                        </a>
                    </Col>
                    
                </Row>
            </Container>

            
            

            <Container fluid className='sub-footer'>
                <Row>
                    <Col className='text-start'>
                        <div className='text-white mt-1'>&copy; 2022 Company, Inc</div>
                    </Col>


                    

                    <Col className='text-end'>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;