import React, {useEffect, useState} from 'react';
import {TMenu} from '../../type/menu-type';
import {readMenu} from '../../service/menu-service';
import {Button, Container, Table} from 'react-bootstrap';
import ButtonComponent from '../button/button-component';

interface IProps {
    auth: boolean;
}

const MenuComponent: React.FC<IProps> = (props) => {

    const [menu, setMenu] = useState<Array<TMenu>>([]);

    useEffect(() => {
        readMenu()
            .then((response) => {
                setMenu(response.data);
                console.log(response.data);
            })
            .catch(() => {
                console.log('Error here');
            })
    }, []);

    const type = (x: boolean) => {
        if (x) {
            return '🌱';
        } else {
            return '🥩';
        }
    };

    const fire = () => {
        console.log('Dude');
    };

    return (
        <Container>
            <h1 className='text-center'>Menu</h1>
            <Container>
                <Table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Type</th>
                        {
                            props.auth &&
                            <th>Order</th>
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {menu.map(m =>
                        <tr key={m._id}>
                            <td>{m.name}</td>
                            <td>{m.price}</td>
                            <td>{type(m.vegan)}</td>
                            {
                                props.auth &&
                                <td><ButtonComponent/></td>
                            }
                        </tr>)}
                    </tbody>
                </Table>
                <Button onClick={fire}>Order!!</Button>
            </Container>
        </Container>
    );

};

export default MenuComponent;
