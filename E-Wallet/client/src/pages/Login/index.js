import React from "react"
import { Col, Form, message, Row } from 'antd'
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../../apicalls/users";

function Login() {
    const navigate = useNavigate();
    const onFinish = async (values) => {
        try {
            const response = await LoginUser(values);
            if (response.success) {
                MessageChannel.success(response.message);
                navigate("/login");
            } else {
                message.error(response.message);
            }
        } catch (error) {
            message.error(response.message);
        }
    }
    return (
        <div className="bg-primary flex items-center justify-center h-screen" >
            <div className="card w-400 p-3" >
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl">WALLET BANK - LOGIN  </h1>



                </div>
                <hr />
                <Form layout="vertical"
                    onFinish={onFinish}

                >

                    <Row gutter={40}>
                        <Col span={24}>
                            <Form.Item label="Email" name='email'>
                                <input type="text" />
                            </Form.Item>

                        </Col>




                        <Col span={24}>
                            <Form.Item label="Password" name='password'>
                                <input type="password" />
                            </Form.Item>
                        </Col>

                    </Row>

                    <button className="Primary-contained-btn w-100" type="submit">Register</button>
                    <h1 className="text-sm underline mt-2"
                        onClick={() => navigate("/register")}

                    > Not a member , Click here to Register</h1>


                </Form>
            </div>



        </div>
    )
}
export default Login