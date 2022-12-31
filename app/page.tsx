
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <div
        className="flex h-screen justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${'https://picsum.photos/id/237/600/400'})`,
        }}
      >
        <div className=" flex h-full w-full items-center justify-center">
          <div className="px-4 py-2 text-center text-white">
            <h1 className="text-4xl font-bold">Pupster</h1>
            <p className="text-xl font-light">
              They're the Good Boys and Girls
            </p>
            <button className="mt-4 rounded border border-blue-700 bg-transparent py-2 px-4 font-semibold text-white hover:border-transparent hover:bg-blue-700 hover:text-white">
              Learn more
            </button>
          </div>
        </div>
      </div >
      <h1>Welcome To Pupster!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet
        diam tortor, id consequat mauris ullamcorper eu. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Pellentesque et dui id justo finibus sollicitudin at et metus. Ut
        feugiat tellus nec metus commodo, sed suscipit nisi gravida. Duis eget
        vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin turpis
        semper, et interdum risus lobortis. Vestibulum suscipit nunc non egestas
        tristique. Proin hendrerit efficitur malesuada. Mauris lorem urna,
        sodales accumsan quam non, tristique tempor erat. Nullam non sem
        facilisis, tempus tortor sit amet, volutpat nisl. Ut et turpis non nunc
        maximus mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet
        cursus. Praesent suscipit orci neque, vestibulum tincidunt augue
        tincidunt non. Duis consequat mattis tortor vitae mattis. Phasellus at
        rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
        malesuada molestie velit ac viverra. Quisque a ullamcorper purus.
        Curabitur luctus mi ac mi hendrerit semper. Nulla tincidunt accumsan
        lobortis. Mauris convallis sapien non nibh porta accumsan. Nunc volutpat
        tempus porttitor. Nunc congue dictum egestas. Aliquam blandit mi eu urna
        scelerisque, vitae volutpat ligula ultricies. Maecenas vel porta augue.
        Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh. Etiam ut
        massa efficitur, gravida sapien non, condimentum sapien. Suspendisse
        massa tortor, facilisis in neque sit amet, scelerisque elementum tortor.
        Nullam eget nibh sit amet odio lobortis ullamcorper. Nulla bibendum
        magna nec sem pulvinar lobortis. Mauris et imperdiet urna, vitae
        lobortis dui. Nunc elementum elit mi, non mattis enim congue at. Proin
        mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc
        vehicula, erat eget laoreet condimentum, felis ante malesuada leo, nec
        efficitur diam nisi eget nisi. Cras arcu lacus, tristique in bibendum
        vitae, elementum eget lorem. Maecenas vestibulum volutpat orci eu
        pharetra. Praesent vel blandit ante, nec faucibus libero. Sed ultrices
        lorem ex, eu facilisis libero convallis ac. Vivamus id dapibus eros.
        Nullam tempor sem rhoncus porta semper. Proin bibendum vulputate nisl,
        fringilla interdum elit pulvinar eu. Quisque vitae quam dapibus,
        vestibulum mauris quis, laoreet massa.
      </p>
    </div>
  );
}
