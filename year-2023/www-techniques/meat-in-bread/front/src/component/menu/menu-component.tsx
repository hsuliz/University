import React, {useEffect, useState} from 'react';
import {TMenu} from '../../type/menu-type';
import {readMenu} from '../../service/menu-service';
import {Container, Table} from 'react-bootstrap';

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
                            props.auth && <th>Order</th>
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
                                <td>Order</td>
                            }
                        </tr>)}
                    </tbody>
                </Table>
            </Container>
        </Container>
    );

};

export default MenuComponent;
