import { Layout, Menu, Typography, Card, Tabs } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph, } = Typography;
const { TabPane } = Tabs;

export default function Documentation() {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            {/* Header */}
            <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
                <div className="logo" style={{ float: "left", color: "white", fontSize: 20, fontWeight: "bold" }}>
                    MyAPI
                </div>
                <Menu theme="dark" mode="horizontal" style={{ float: "right" }}>
                    <Menu.Item key="1">Docs</Menu.Item>
                    <Menu.Item key="2">Quick Start</Menu.Item>
                    <Menu.Item key="3">Sandbox</Menu.Item>
                </Menu>
            </Header>

            <Layout style={{ marginTop: 64 }}>
                {/* Sidebar for navigation (optional) */}
                <Sider width={220} theme="light" style={{ padding: "20px" }}>
                    <Menu mode="inline" defaultSelectedKeys={["1"]}>
                        <Menu.Item key="1">Introduction</Menu.Item>
                        <Menu.Item key="2">Authentication</Menu.Item>
                        <Menu.Item key="3">Endpoints</Menu.Item>
                        <Menu.Item key="4">Examples</Menu.Item>
                    </Menu>
                </Sider>

                {/* Main Content */}
                <Layout style={{ padding: "20px 40px" }}>
                    <Content>
                        {/* Hero / Intro */}
                        <Title level={2}>Welcome to MyAPI 🚀</Title>
                        <Paragraph>
                            MyAPI allows developers to securely manage and query data using our Zero-Trust Data Engine.
                            Below you’ll find documentation, usage examples, and a sandbox to try the APIs.
                        </Paragraph>

                        {/* Authentication Section */}
                        <Card title="Authentication" style={{ marginBottom: 20 }}>
                            <Paragraph>
                                All requests require an API Key. Include it in the header:
                            </Paragraph>
                            <pre>{`Authorization: Bearer <your_api_key>`}</pre>
                        </Card>

                        {/* API Endpoints */}
                        <Card title="Endpoints" style={{ marginBottom: 20 }}>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="GET /users" key="1">
                                    <Paragraph>Fetch all users.</Paragraph>
                                    <pre>{`GET https://api.mycompany.com/v1/users`}</pre>
                                    <Paragraph>Example response:</Paragraph>
                                    <pre>{`{
  "users": [
    { "id": 1, "name": "Alice" },
    { "id": 2, "name": "Bob" }
  ]
}`}</pre>
                                </TabPane>

                                <TabPane tab="POST /users" key="2">
                                    <Paragraph>Create a new user.</Paragraph>
                                    <pre>{`POST https://api.mycompany.com/v1/users`}</pre>
                                    <Paragraph>Body:</Paragraph>
                                    <pre>{`{
  "name": "Charlie",
  "email": "charlie@example.com"
}`}</pre>
                                </TabPane>
                            </Tabs>
                        </Card>

                        {/* Quick Start */}
                        <Card title="Quick Start" style={{ marginBottom: 20 }}>
                            <Paragraph>Use curl to test:</Paragraph>
                            <pre>{`curl -X GET https://api.mycompany.com/v1/users \\
-H "Authorization: Bearer <your_api_key>"`}</pre>

                            <Paragraph>Or with JavaScript (fetch):</Paragraph>
                            <pre>{`fetch("https://api.mycompany.com/v1/users", {
  headers: { "Authorization": "Bearer <your_api_key>" }
}).then(res => res.json()).then(console.log);`}</pre>
                        </Card>

                        {/* Sandbox Section (future enhancement) */}
                        <Card title="Try it out (Sandbox)" style={{ marginBottom: 20 }}>
                            <Paragraph>
                                Here you can enter your API key and test endpoints directly (you can integrate <b>swagger-ui</b> or <b>Postman collections</b> later).
                            </Paragraph>
                        </Card>
                    </Content>

                    {/* Footer */}
                    <Footer style={{ textAlign: "center" }}>
                        © {new Date().getFullYear()} MyAPI | Developer Portal
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    );
}
