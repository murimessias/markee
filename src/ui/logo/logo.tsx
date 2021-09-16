import * as S from './styles'

export type LogoProps = {
  version?: 'light' | 'dark'
}

const Logo = ({ version = 'light' }: LogoProps) => (
  <S.Wrapper version={version}>
    <svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 204 55'>
      <path
        d='M63.275 42V21.168h4.746l.462 2.814a7.265 7.265 0 0 1 2.646-2.394c1.12-.616 2.408-.924 3.864-.924 3.22 0 5.502 1.246 6.846 3.738.756-1.148 1.764-2.058 3.024-2.73 1.288-.672 2.688-1.008 4.2-1.008 2.716 0 4.802.812 6.258 2.436 1.456 1.624 2.184 4.004 2.184 7.14V42H92.13V30.744c0-1.792-.35-3.164-1.05-4.116-.672-.952-1.722-1.428-3.15-1.428-1.456 0-2.632.532-3.528 1.596-.868 1.064-1.302 2.548-1.302 4.452V42h-5.376V30.744c0-1.792-.35-3.164-1.05-4.116-.7-.952-1.778-1.428-3.234-1.428-1.428 0-2.59.532-3.486 1.596-.868 1.064-1.302 2.548-1.302 4.452V42h-5.376Zm43.156.504c-1.792 0-3.262-.28-4.41-.84-1.148-.588-2.002-1.358-2.562-2.31a6.099 6.099 0 0 1-.84-3.15c0-1.932.756-3.5 2.268-4.704 1.512-1.204 3.78-1.806 6.804-1.806h5.292v-.504c0-1.428-.406-2.478-1.218-3.15-.812-.672-1.82-1.008-3.024-1.008-1.092 0-2.044.266-2.856.798-.812.504-1.316 1.26-1.512 2.268h-5.25c.14-1.512.644-2.828 1.512-3.948.896-1.12 2.044-1.974 3.444-2.562 1.4-.616 2.968-.924 4.704-.924 2.968 0 5.306.742 7.014 2.226 1.708 1.484 2.562 3.584 2.562 6.3V42h-4.578l-.504-3.36c-.616 1.12-1.484 2.044-2.604 2.772-1.092.728-2.506 1.092-4.242 1.092Zm1.218-4.2c1.54 0 2.73-.504 3.57-1.512.868-1.008 1.414-2.254 1.638-3.738h-4.578c-1.428 0-2.45.266-3.066.798-.616.504-.924 1.134-.924 1.89 0 .812.308 1.442.924 1.89.616.448 1.428.672 2.436.672ZM120.13 42V21.168h4.788l.504 3.906a8.607 8.607 0 0 1 3.066-3.192c1.316-.812 2.856-1.218 4.62-1.218v5.67h-1.512c-1.176 0-2.226.182-3.15.546-.924.364-1.652.994-2.184 1.89-.504.896-.756 2.142-.756 3.738V42h-5.376Zm13.292 0V11.76h5.376v17.85l7.392-8.442h6.384l-8.526 9.492L153.96 42h-6.72l-8.442-10.458V42h-5.376Zm28.91.504c-2.1 0-3.962-.448-5.586-1.344a9.727 9.727 0 0 1-3.822-3.78c-.924-1.624-1.386-3.5-1.386-5.628 0-2.156.448-4.074 1.344-5.754.924-1.68 2.184-2.982 3.78-3.906 1.624-.952 3.528-1.428 5.712-1.428 2.044 0 3.85.448 5.418 1.344a9.462 9.462 0 0 1 3.654 3.696c.896 1.54 1.344 3.262 1.344 5.166 0 .308-.014.63-.042.966 0 .336-.014.686-.042 1.05h-15.834c.112 1.624.672 2.898 1.68 3.822 1.036.924 2.282 1.386 3.738 1.386 1.092 0 2.002-.238 2.73-.714a4.646 4.646 0 0 0 1.68-1.932h5.46a9.941 9.941 0 0 1-1.974 3.612c-.896 1.064-2.016 1.904-3.36 2.52-1.316.616-2.814.924-4.494.924Zm.042-17.472c-1.316 0-2.478.378-3.486 1.134-1.008.728-1.652 1.848-1.932 3.36h10.374c-.084-1.372-.588-2.464-1.512-3.276-.924-.812-2.072-1.218-3.444-1.218Zm21.7 17.472c-2.1 0-3.962-.448-5.586-1.344a9.727 9.727 0 0 1-3.822-3.78c-.924-1.624-1.386-3.5-1.386-5.628 0-2.156.448-4.074 1.344-5.754.924-1.68 2.184-2.982 3.78-3.906 1.624-.952 3.528-1.428 5.712-1.428 2.044 0 3.85.448 5.418 1.344a9.462 9.462 0 0 1 3.654 3.696c.896 1.54 1.344 3.262 1.344 5.166 0 .308-.014.63-.042.966 0 .336-.014.686-.042 1.05h-15.834c.112 1.624.672 2.898 1.68 3.822 1.036.924 2.282 1.386 3.738 1.386 1.092 0 2.002-.238 2.73-.714a4.646 4.646 0 0 0 1.68-1.932h5.46a9.941 9.941 0 0 1-1.974 3.612c-.896 1.064-2.016 1.904-3.36 2.52-1.316.616-2.814.924-4.494.924Zm.042-17.472c-1.316 0-2.478.378-3.486 1.134-1.008.728-1.652 1.848-1.932 3.36h10.374c-.084-1.372-.588-2.464-1.512-3.276-.924-.812-2.072-1.218-3.444-1.218Z'
        fill='currentColor'
      />
      <path
        d='M198.004 42.294c-.98 0-1.792-.308-2.436-.924a3.034 3.034 0 0 1-.924-2.226c0-.896.308-1.652.924-2.268.644-.616 1.456-.924 2.436-.924s1.778.308 2.394.924c.644.616.966 1.372.966 2.268 0 .868-.322 1.61-.966 2.226-.616.616-1.414.924-2.394.924Z'
        fill='url(#a)'
      />
      <path
        d='M0 49.623V5.432a1.25 1.25 0 0 1 1.977-1.017l19.568 14.002a1.25 1.25 0 0 0 1.455 0L42.568 4.415a1.25 1.25 0 0 1 1.977 1.017v44.135c0 1.167-1.457 1.697-2.207.804L30.973 36.834a1.25 1.25 0 0 0-1.822-.1l-5.997 5.735a1.25 1.25 0 0 1-1.746-.018l-5.71-5.688a1.25 1.25 0 0 0-1.83.072L2.197 50.437c-.755.88-2.198.346-2.198-.814Z'
        fill='url(#b)'
      />
      <defs>
        <linearGradient
          id='a'
          x1='132.045'
          y1='0'
          x2='132.045'
          y2='55'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#2DD4BF' />
          <stop offset='1' stopColor='#22D3EE' />
        </linearGradient>
        <linearGradient
          id='b'
          x1='21.902'
          y1='7.545'
          x2='21.902'
          y2='53'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#2DD4BF' />
          <stop offset='1' stopColor='#22D3EE' />
        </linearGradient>
      </defs>
    </svg>
  </S.Wrapper>
)

export { Logo }