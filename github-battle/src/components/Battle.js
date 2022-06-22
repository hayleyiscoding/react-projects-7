export default function Battle() {
  return (
    <section className='battle container'>
      <div>
        <h1>Instructions</h1>
        <div className='flex instructions justify-between'>
          <div>
            <h2>Enter Two Github Users</h2>
            <div>
              <p>👥</p>
            </div>
          </div>
          <div>
            <h2>Battle</h2>
            <div>
              <p>🥷</p>
            </div>
          </div>
          <div>
            <h2>See the winner</h2>
            <div>
              <p>🏆</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Players</h2>
        <div className='flex'>
          <div>
            <form>
              <input type='text' placeholder='github username' />
              <button type='button'>Submit</button>
            </form>
          </div>
          <div>
            <form>
              {" "}
              <input type='text' placeholder='github username' />
              <button type='button'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
