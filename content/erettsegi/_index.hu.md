+++
title = "Érettségi link generátor"
template = "no_title.html"
+++

<style>
h1 {
  text-align: center;
}

input[type="url"] {
  width: 100%;
  color: #6D6D6D !important;
}

.buttons {
  margin-block-start: 2rem;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

@media (max-width: 600px) {
  .button-group {
    justify-content: center;
  }
}

button.external::after {
  -webkit-mask-image: var(--icon-external);
  display: inline-block;
  opacity: var(--dim-opacity);
  mask-image: var(--icon-external);
  mask-size: cover;
  margin-inline-start: .25rem;
  background-color: currentColor;
  width: max(.75rem,.75em);
  height: max(.75rem,.75em);
  content: "";
}

button:disabled {
  color: #6D6D6D;
}

button:disabled:hover {
  color: #6D6D6D !important;
}

</style>

# Érettségi link generátor

<div id="generator-container" class="container">
      <hr />
      <form id="final-exam-form" action="">
        <div class="input-group">
          <label for="year">Év:&nbsp;</label>
          <select name="year" class="input-element" id="year"></select>
        </div>
        <p>Időszak:</p>
          <ul>
            <li>
              <input
                type="radio"
                name="period"
                class="input-element"
                id="may"
                value="may"
              />
              <label for="may">&nbsp;május-június</label>
            </li>
            <li>
              <input
                type="radio"
                name="period"
                class="input-element"
                id="october"
                value="october"
              />
              <label for="october">&nbsp;október-november</label>
            </li>
          </ul>
          <p>Nehézségi szint:</p>
          <ul>
            <li>
              <input
                type="radio"
                name="difficulty"
                class="input-element"
                id="middle"
                value="middle"
              />
              <label for="middle">középszint</label>
            </li>
            <li>
              <input
                type="radio"
                name="difficulty"
                class="input-element"
                id="advanced"
                value="advanced"
              />
              <label for="advanced">emelt szint</label>
            </li>
          </ul>
        <div class="input-group">
          <label for="subject">Tantárgy:&nbsp;</label>
          <select name="subject" class="input-element" id="subject">
            <option value="magyir" id="magyir">Magyar nyelv és irodalom</option>
            <option value="mat" id="mat">Matematika</option>
            <option value="tort" id="tort">Történelem</option>
            <option value="angol" id="angol">Angol nyelv</option>
            <option value="inf" id="inf">Informatika (közismereti)</option>
            <option value="infoism" id="infoism">
              Informatikai ismeretek (ágazati)
            </option>
            <option value="digkult" id="digkult">Digitális kultúra</option>
          </select>
        </div>
        <br />
        <input type="url" name="output" id="output" disabled />
        <br />
        <div class="buttons button-group">
          <button class="btn external" id="task" href="">Feladatlap</button>
          <button class="btn external" id="sourcefiles" href="">Forrásfájlok</button>
          <button class="btn external" id="solution" href="">Javítókulcs</button>
          <button class="btn external" id="solutionfiles" href="">Megoldás fájlok</button>
        </div>
      </form>
    </div>

<script src="https://cdn.statically.io/gh/ymstnt/erettsegi-link-generator/main/script.js"></script>
