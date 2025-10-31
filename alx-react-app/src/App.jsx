function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <UserProfile name="Bob" age={30} bio="Enjoys cooking and traveling" />
    </div>
  )
}
